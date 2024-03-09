import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateEmbeddingDto } from './llm/dto/create-embedding.dto';

@Controller('llm')
export class AppController {
  @Inject('LLM_SERVICE')
  private readonly client: ClientKafka;

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @ApiTags('llm')
  @ApiBody({ type: CreateEmbeddingDto })
  @Post('create_embedding')
  createEmbeeding(@Body() createEmbeddingDto: CreateEmbeddingDto) {
    return this.client.emit<string>(
      'llm.create_embedding',
      createEmbeddingDto.text,
    );
  }
}
