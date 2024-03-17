import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { AppController } from './app.controller';
import { KafkaModule } from './kafka/kafka.module';
import { LlmModule } from './llm/llm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SwaggerModule,
    KafkaModule,
    LlmModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
