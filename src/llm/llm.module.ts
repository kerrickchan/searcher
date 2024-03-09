import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/entities';
import { DbModule } from '../db/db.module';
import { KafkaModule } from '../kafka/kafka.module';
import { LlmController } from './llm.controller';
import { LlmService } from './llm.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature(entities),
    DbModule,
    KafkaModule,
  ],
  controllers: [LlmController],
  providers: [LlmService],
})
export class LlmModule {}
