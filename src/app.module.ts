import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LlmModule } from './llm/llm.module';
import { KafkaModule } from './kafka/kafka.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KafkaModule,
    LlmModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
