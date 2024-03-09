import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/entities';
import { DbModule } from '../db/db.module';
import { KafkaModule } from '../kafka/kafka.module';
import { LlmController } from './llm.controller';
import { LlmService } from './llm.service';
import { Ollama } from 'llamaindex';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature(entities),
    DbModule,
    KafkaModule,
  ],
  controllers: [LlmController],
  providers: [
    {
      provide: 'LLM_SERVICE_CONTEXT',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return new Ollama({
          model: config.get('LLM_MODEL'),
        });
      },
    },
    LlmService,
  ],
})
export class LlmModule {}
