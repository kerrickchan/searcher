import {
  Column,
  ColumnType,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PromptEntity {
  @PrimaryColumn()
  id: number;

  @Column({
    nullable: true,
  })
  prompt: string;

  @Column()
  content: string;

  @Column({
    type: 'vector' as ColumnType,
    length: 8000,
  })
  content_embedding: number[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
