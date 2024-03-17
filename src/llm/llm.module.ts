import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KafkaModule } from '../kafka/kafka.module';
import { LlmController } from './llm.controller';
import { LlmService } from './llm.service';
import { Ollama, QdrantVectorStore } from 'llamaindex';

@Module({
  imports: [ConfigModule, KafkaModule],
  controllers: [LlmController],
  providers: [
    {
      provide: 'LLM_MODEL',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return new Ollama({
          model: config.get('LLM_MODEL'),
        });
      },
    },
    {
      provide: 'VECTOR_STORE',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return new QdrantVectorStore({
          url: config.get('VECTOR_STORE_URL'),
        });
      },
    },
    LlmService,
  ],
})
export class LlmModule {}
