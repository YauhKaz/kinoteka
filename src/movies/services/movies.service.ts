import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { Movie } from '../entities/movies.entity';
import { ImageService } from './image.service';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    private imageService: ImageService,
  ) {}

  async getAll() {
    return await this.movieRepository.find();
  }

  async getOne(id: number) {
    return await this.movieRepository.findOne({ where: { id: id } });
  }

  async create(movieDto: CreateMovieDto) {
    const movie = await this.movieRepository.create(movieDto);
    const createMovie = await this.movieRepository.save(movie);
    return this.movieRepository.findOne(createMovie.id);
  }

  async update(movieDto: CreateMovieDto, id: number) {
    const updateMovie = await this.movieRepository.findOne({
      where: { id: id },
    });
    await this.movieRepository.update({ id: id }, movieDto);
    // updateMovie.images.forEach(
    //   async (item) => await this.imageService.update(item, item.id),
    // );
    return updateMovie.images;
  }

  async destroy(id: number) {
    const deleteMovie = await this.movieRepository.findOne({
      where: { id: id },
    });
    await this.movieRepository.remove(deleteMovie);
    //await deleteMovie.images.map((item) => this.imageService.destroy(item.id));
    return { deleted: true };
  }
}
