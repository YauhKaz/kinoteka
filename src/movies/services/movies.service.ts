import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { Movie } from "../entities/movies.entity";
import { ImageService } from "./image.service";
import { ActorService } from "./actor.service";
import { CategoryService } from "./category.service";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    private imageService: ImageService,
    private actorService: ActorService,
    private categoryService: CategoryService,
  ) {}

  async getAll() {
    return await this.movieRepository.find();
  }

  async getOne(id: number) {
    return await this.movieRepository.findOne({where: {id: id}});
  }

  async create(movieDto: CreateMovieDto) {
    const movie = await this.movieRepository.create(movieDto);
    const image = movie.image;
    const actor = movie.actor;
    const category = movie.category;
    await image.map(item => this.imageService.create(item)); 
    await category.map(item => this.categoryService.create(item)); 
    //await actor.map(item => this.actorService.create(item)); //<- question with imageId
    return await this.movieRepository.save(movieDto);
  }

  async update(movieDto: CreateMovieDto, id: number) {
    await this.movieRepository.update({id}, movieDto);
    return await this.movieRepository.findOne({id});
  }

  async delete(id: number) {
    return await this.movieRepository.delete({id});
  }
}