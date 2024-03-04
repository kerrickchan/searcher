import { Module } from '@nestjs/common';
import { KafkaModule } from '../kafka/kafka.module';
import { LlmController } from './llm.controller';
import { LlmService } from './llm.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, KafkaModule],
  controllers: [LlmController],
  providers: [LlmService],
})
export class LlmModule {}
