import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieController } from "./controllers/movies.controller"; 
import { Movie } from "./entities/movies.entity";
import { Category } from "./entities/categories.entity";
import { Image } from "./entities/images.entity";
import { Actor } from "./entities/actors.entity";
import { MovieActor } from "./entities/movie-actor.entity";
import { MovieCategory } from "./entities/movie-category.entity";
import { MovieImage } from "./entities/movie-image.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie, Actor, Category, Image, MovieActor, MovieCategory, MovieImage])
  ],
  controllers: [ MovieController ]
})

export class MovieModule {}