import { ApiProperty } from '@nestjs/swagger';
import { Entity } from 'typeorm';

@Entity()
export class CreateEmbeddingDto {
  @ApiProperty({
    description: 'The text to be embedded',
    example: 'Hello, World!',
  })
  text: string;
}
