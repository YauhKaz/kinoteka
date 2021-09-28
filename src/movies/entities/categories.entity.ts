import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { MovieCategory } from "./movie-category.entity";

@Entity()
export class Category{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => MovieCategory, movieCategory => movieCategory.movie)
  movies: MovieCategory[];
}