import { Controller, Inject } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { LlmService } from './llm.service';

@Controller()
export class LlmController {
  @Inject(LlmService)
  private readonly llmService: LlmService;

  @EventPattern('llm.create_embedding')
  async PostTextToCreateEmbedding(content: string): Promise<void> {
    return this.llmService.saveVector('content', content);
  }
}
