import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieController } from './controllers/movie.controller';
import { Movie } from './entities/movies.entity';
import { Category } from './entities/categories.entity';
import { Image } from './entities/images.entity';
import { Actor } from './entities/actors.entity';
import { MovieService } from './services/movie.service';
import { ActorService } from './services/actor.service';
import { ActorController } from './controllers/actor.controller';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controller';
import { ImageController } from './controllers/image.controller';
import { ImageService } from './services/image.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, Actor, Category, Image])],
  controllers: [
    MovieController,
    ActorController,
    CategoryController,
    ImageController,
  ],
  providers: [MovieService, ActorService, CategoryService, ImageService],
  exports: [MovieService, ActorService, CategoryService, ImageService],
})
export class MovieModule {}
