import {
  Column,
  ColumnType,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class NewsEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'vector' as ColumnType,
  })
  title_embedding: number[];

  @Column({
    type: 'text',
  })
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
