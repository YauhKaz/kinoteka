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
import { MovieService } from "./services/movies.service";
import { ActorService } from "./services/actor.service";
import { ActorController } from "./controllers/actor.controller";
import { CategoryService } from "./services/category.service";
import { CategoryController } from "./controllers/category.controller";
import { ImageController } from "./controllers/image.controller";
import { ImageService } from "./services/image.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie, Actor, Category, Image, MovieActor, MovieCategory, MovieImage])
  ],
  controllers: [ MovieController, ActorController, CategoryController, ImageController ],
  providers: [ MovieService, ActorService, CategoryService, ImageService ]
})

export class MovieModule {}