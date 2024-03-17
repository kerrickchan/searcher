import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromptEntityRepository } from './repositories/prompty-entity.repository';
import { PromptEntity } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([PromptEntity])],
  providers: [PromptEntityRepository],
  exports: [PromptEntityRepository],
})
export class DbModule {}
