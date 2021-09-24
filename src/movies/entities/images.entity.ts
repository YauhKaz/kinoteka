import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isMain: boolean;

  @Column()
  url: string;
}