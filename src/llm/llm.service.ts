import { Injectable } from '@nestjs/common';
import {
  Ollama,
  Document,
  VectorStoreIndex,
  QdrantVectorStore,
} from 'llamaindex';

@Injectable()
export class LlmService {
  private readonly llm: Ollama = new Ollama({
    model: process.env.LLM_MODEL,
  });

  async createEmbeeding(text: string): Promise<number[]> {
    return this.llm.getTextEmbedding(text);
  }

  async saveVector(id: string, text: string): Promise<void> {
    const vectorStore = new QdrantVectorStore({
      url: 'http://localhost:6333',
    });
    const document = new Document({ text, id_: id });
    const index = await VectorStoreIndex.fromDocuments([document], {
      vectorStore,
    });

    const queryEngine = index.asQueryEngine();

    const response = await queryEngine.query({
      query: 'What did the author do in college?',
    });

    // Output response
    console.log(response.toString());
  }
}
