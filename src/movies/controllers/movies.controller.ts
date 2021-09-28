import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { MovieService } from "../services/movies.service";

@Controller('movies')
export class MovieController {

  constructor(private movieService: MovieService) {

  }

  @Get()
  getAll() {
    return this.movieService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Put(':id')
  update(@Body() updateMovieDto: CreateMovieDto, @Param('id') id:number) {
    return this.movieService.update(updateMovieDto, id);
  }

  @Delete(':id')
  delete(@Param ('id') id:number) {
    return this.movieService.delete(id);
  }
}