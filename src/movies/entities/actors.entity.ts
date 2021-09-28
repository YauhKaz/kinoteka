import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Image } from "./images.entity";
import { MovieActor } from "./movie-actor.entity";

@Entity()
export class Actor{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dob: Date;

  @Column()
  sex: string;

  @OneToMany(() => MovieActor, movieActor => movieActor.movie)
  movies: MovieActor[];

  @OneToOne(() => Image)
  @JoinColumn()
  image: Image;
}