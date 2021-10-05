import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  categoryId: number;
}
