import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Image } from './images.entity';
import { Category } from './categories.entity';
import { Actor } from './actors.entity';

@Entity()
export class Movie {
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

  @ManyToMany(() => Image, (image) => image.movies, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  images: Image[];

  @ManyToMany(() => Category, (category) => category.movies, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  categories: Category[];

  @ManyToMany(() => Actor, (actor) => actor.movies, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  actors: Actor[];
}
