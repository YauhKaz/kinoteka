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

  async getAll() {
    return await this.movieRepository.find({relations: ['image', 'actor', 'category']});
  }

  async getOne(id: number) {
    return await this.movieRepository.findOne({where: {id: id}});
  }

  async create(movieDto: CreateMovieDto) {
    const movie = this.movieRepository.create(movieDto);
    await this.movieRepository.save(movieDto);
    return movie;
  }

  async update(movieDto: CreateMovieDto, id: number) {
    await this.movieRepository.update({id}, movieDto);
    return await this.movieRepository.findOne({id});
  }

  async delete(id: number) {
    return await this.movieRepository.delete({id});
  }
}