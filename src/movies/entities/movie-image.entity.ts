import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Image } from "./images.entity";
import { Movie } from "./movies.entity";

@Entity()
export class MovieImage{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  imageId: number;

  // @ManyToOne(() => Movie, movie => movie.image)
  // movie: Movie;

  // @ManyToOne(() => Image, image => image.movie)
  // image: Image;
}