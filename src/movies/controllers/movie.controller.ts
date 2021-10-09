import { Controller } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { Movie } from '../entities/movies.entity';
import { MovieService } from '../services/movie.service';
// import { User } from '../../users/users.service';

@Crud({
  model: {
    type: Movie,
  },
  query: {
    join: {
      movies: {
        persist: ['id'],
        eager: true,
      },
      images: {
        persist: ['id'],
        eager: true,
        required: false,
      },
      actors: {
        persist: ['id'],
        eager: true,
        required: false,
      },
      categories: {
        persist: ['id'],
        eager: true,
        required: false,
      },
    },
  },
})
@CrudAuth({
  property: 'user',
  filter: (user) => ({
    id: user.userId,
    isAdmin: true,
  }),
})
@Controller('movies')
export class MovieController implements CrudController<Movie> {
  constructor(public service: MovieService) {}
}
