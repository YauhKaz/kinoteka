import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Movie } from "./movies.entity";

@Entity()
export class Category{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => Movie, movie => movie.category)
  // @JoinTable()
  movie: Movie[];
}