import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Category } from "./categories.entity";
import { Movie } from "./movies.entity";

@Entity()
export class MovieCategory{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  categoryId: number;

  @ManyToOne(() => Movie, movie => movie.categories)
  movie: Movie;

  @ManyToOne(() => Category, category => category.movies)
  category: Category;
}