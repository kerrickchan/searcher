import { Inject, Injectable } from '@nestjs/common';
import {
  Ollama,
  Document,
  VectorStoreIndex,
  QdrantVectorStore,
  serviceContextFromDefaults,
} from 'llamaindex';

@Injectable()
export class LlmService {
  @Inject('LLM_MODEL')
  private readonly llm: Ollama;

  @Inject('VECTOR_STORE')
  private readonly vectorStore: QdrantVectorStore;

  async createEmbeeding(text: string): Promise<number[]> {
    return this.llm.getTextEmbedding(text);
  }

  async saveVector(id: string, text: string): Promise<void> {
    const serviceContext = serviceContextFromDefaults({
      embedModel: this.llm, // prevent 'Set OpenAI Key in OPENAI_API_KEY env variable' error
      llm: this.llm,
    });

    const document = new Document({ text, id_: id });
    const index = await VectorStoreIndex.fromDocuments([document], {
      vectorStore: this.vectorStore,
      serviceContext,
    });

    const queryEngine = index.asQueryEngine();

    const response = await queryEngine.query({
      query: 'What did the author do in college?',
    });

    // Output response
    console.log(response.toString());
  }
}
