import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Image } from './images.entity';
import { Movie } from './movies.entity';

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dob: Date;

  @Column()
  sex: 'male' | 'female';

  @Column()
  photoUrl: string;

  @ManyToMany(() => Movie, (movie) => movie.actors)
  // @JoinTable()
  movies: Movie[];

  // @OneToOne(() => Image, {
  //   cascade: true,
  //   onDelete: 'RESTRICT',
  // })
  // @JoinColumn()
  // image: Image;
}
