import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { MovieService } from '../services/movies.service';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async getAll() {
    return await this.movieService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return await this.movieService.getOne(id);
  }

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    return await this.movieService.create(createMovieDto);
  }

  @Put(':id')
  async update(
    @Body() updateMovieDto: CreateMovieDto,
    @Param('id') id: number,
  ) {
    return await this.movieService.update(updateMovieDto, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.movieService.destroy(id);
  }
}
