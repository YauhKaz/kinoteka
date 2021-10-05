import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
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

  @OneToMany(() => Image, (image) => image.movie, {
    eager: true,
    cascade: true,
  })
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
