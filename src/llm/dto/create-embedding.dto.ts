import { ApiProperty } from '@nestjs/swagger';

export class CreateEmbeddingDto {
  @ApiProperty({
    description: 'The text to be embedded',
    example: 'Hello, World!',
  })
  text: string;
}
