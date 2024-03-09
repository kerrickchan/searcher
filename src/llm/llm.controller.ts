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
    console.log('content', content);
    await this.llmService.saveVector('content', content);
    // const vectors = await this.llmService.createEmbeeding(content);
    // console.log('vectors', vectors);

    // const promptEntity = new PromptEntity();
    // promptEntity.content = content;
    // promptEntity.content_embedding = vectors;
    // console.log('promptEntity', promptEntity);
    // await this.promptEntityRepo.createPrompt(promptEntity);
  }
}
