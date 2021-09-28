import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Movie } from "./movies.entity";
import { Actor } from "./actors.entity"; 

@Entity()
export class MovieActor{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  actorId: number;

  @ManyToOne(() => Movie, movie => movie.actores)
  movie: Movie;

  @ManyToOne(() => Actor, actor => actor.movies)
  actor: Actor;
}