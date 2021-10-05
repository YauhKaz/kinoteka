import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Movie } from './movies.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isMain: boolean;

  @Column()
  url: string;

  @ManyToMany(() => Movie, (movie) => movie.images)
  movies: Movie[];
}
