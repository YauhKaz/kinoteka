import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { MovieActor } from "./movie-actor.entity";
import { MovieCategory } from "./movie-category.entity";
import { MovieImage } from "./movie-image.entity"

@Entity()
export class Movie{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;

  @Column()
  year: number;

  @OneToMany(() => MovieImage, movieImage => movieImage.image)
  image: MovieImage[];

  @OneToMany(() => MovieCategory, movieCategory => movieCategory.category)
  category: MovieCategory[];

  @OneToMany(() => MovieActor, movieActor => movieActor.actor)
  actor: MovieActor[];
}