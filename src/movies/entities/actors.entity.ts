import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Image } from "./images.entity";
import { Movie } from "./movies.entity";

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

  @ManyToMany(() => Movie, movie => movie.actor)
  // @JoinTable()
  movie: Movie[];

  @OneToOne(() => Image)
  @JoinColumn()
  image: Image;
}