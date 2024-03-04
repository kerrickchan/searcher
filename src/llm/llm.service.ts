import { Injectable } from '@nestjs/common';
import { Ollama } from 'llamaindex';

@Injectable()
export class LlmService {
  private readonly llm: Ollama = new Ollama({
    model: process.env.LLM_MODEL,
  });

  async createEmbeeding(text: string): Promise<number[]> {
    return this.llm.getTextEmbedding(text);
  }
}
