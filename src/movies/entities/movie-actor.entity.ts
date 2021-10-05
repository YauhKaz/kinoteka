import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieActor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  actorId: number;
}
