import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { KafkaModule } from './kafka/kafka.module';
import { LlmModule } from './llm/llm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SwaggerModule,
    DbModule,
    KafkaModule,
    LlmModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
