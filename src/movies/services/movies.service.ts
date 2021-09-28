import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { Movie } from "../entities/movies.entity";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  getAll() {
    return this.movieRepository.find();
  }

  getOne(id: number) {
    return this.movieRepository.findOne({where: {id: id}});
  }

  create(movieDto: CreateMovieDto) {
    const movie = this.movieRepository.create(movieDto);
    this.movieRepository.save(movieDto);
    return movie;
  }

  update(movieDto: CreateMovieDto, id: number) {
    this.movieRepository.update({id}, movieDto);
    return this.movieRepository.findOne({id});
  }

  delete(id: number) {
    return this.movieRepository.delete({id});
  }
}