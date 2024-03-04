import { Controller, Inject } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { LlmService } from './llm.service';

@Controller()
export class LlmController {
  @Inject(LlmService)
  private readonly llmService: LlmService;

  @EventPattern('create_embedding')
  async handleUserCreated(text: string): Promise<number[]> {
    return this.llmService.createEmbeeding(text);
  }
}
