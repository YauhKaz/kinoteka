import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  imageId: number;
}
