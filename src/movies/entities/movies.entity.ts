import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from "typeorm";
import { Image } from "./images.entity"
import { Category } from "./categories.entity"
import { Actor } from "./actors.entity"

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

  @ManyToMany(() => Image, image => image.movie, {eager: true})
  @JoinTable()
  image: Image[];

  @ManyToMany(() => Category, category => category.movie, {eager: true})
  @JoinTable()
  category: Category[];

  @ManyToMany(() => Actor, actor => actor.movie, {eager: true})
  @JoinTable()
  actor: Actor[];
}