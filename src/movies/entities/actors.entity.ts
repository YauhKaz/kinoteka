import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Movie } from './movies.entity';

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dob: Date;

  @Column()
  sex: string;

  @Column()
  photoUrl: string;

  @ManyToMany(() => Movie, (movie) => movie.actors)
  movies: Movie[];
}
