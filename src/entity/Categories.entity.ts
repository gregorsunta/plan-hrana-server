import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column('text', { array: true })
  subcategoryids: string[];
}
