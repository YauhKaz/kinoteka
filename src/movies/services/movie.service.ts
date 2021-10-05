import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Movie } from '../entities/movies.entity';

@Injectable()
export class MovieService extends TypeOrmCrudService<Movie> {
  constructor(@InjectRepository(Movie) repo) {
    super(repo);
  }
}
