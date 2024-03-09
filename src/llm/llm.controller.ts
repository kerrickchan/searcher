import { Controller, Inject } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PromptEntityRepository } from 'src/db/repositories/prompty-entity.repository';
import { LlmService } from './llm.service';

@Controller()
export class LlmController {
  @Inject(LlmService)
  private readonly llmService: LlmService;
  @Inject(PromptEntityRepository)
  private readonly promptEntityRepo: PromptEntityRepository;

  @EventPattern('llm.create_embedding')
  async PostTextToCreateEmbedding(content: string): Promise<void> {
    return this.llmService.saveVector('content', content);
  }
}
