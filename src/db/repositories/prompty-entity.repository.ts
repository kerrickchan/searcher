import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PromptEntity } from '../../entities';

@Injectable()
export class PromptEntityRepository {
  @InjectRepository(PromptEntity)
  private readonly promptRepo: Repository<PromptEntity>;

  async getPrompts(): Promise<PromptEntity[]> {
    return this.promptRepo.find();
  }

  async getPromptById(id: number): Promise<PromptEntity> {
    return this.promptRepo.findOneBy({ id });
  }

  async createPrompt(prompt: PromptEntity): Promise<PromptEntity> {
    return this.promptRepo.save(prompt);
  }
}
