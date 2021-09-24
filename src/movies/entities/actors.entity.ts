import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

  @Column()
  imageId: number;
}