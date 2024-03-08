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

  @Column()
  prompt: string;

  @Column()
  content: string;

  @Column({
    type: 'vector' as ColumnType,
  })
  content_embedding: number[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
