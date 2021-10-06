import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Movie } from './movies.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isMain: boolean;

  @Column()
  url: string;

  @ManyToOne(() => Movie, (movie) => movie.images)
  movie: Movie;
}
