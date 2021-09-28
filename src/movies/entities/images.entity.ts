import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { MovieImage } from "./movie-image.entity";

@Entity()
export class Image{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isMain: boolean;

  @Column()
  url: string;

  @OneToMany(() => MovieImage, movieImage => movieImage.movie)
  movies: MovieImage[];
}