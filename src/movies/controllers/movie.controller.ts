import { Controller, UseGuards } from '@nestjs/common';
import {
  CreateManyDto,
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { AdminAuthGuard } from 'src/auth/admin.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Movie } from '../entities/movies.entity';
import { MovieService } from '../services/movie.service';

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
@Controller('movies')
export class MovieController implements CrudController<Movie> {
  constructor(public service: MovieService) {}

  get base(): CrudController<Movie> {
    return this;
  }

  @Override()
  getMany(@ParsedRequest() req: CrudRequest) {
    return this.base.getManyBase(req);
  }

  @Override('getOneBase')
  getOneAndDoStuff(@ParsedRequest() req: CrudRequest) {
    return this.base.getOneBase(req);
  }

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Override()
  createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Movie) {
    return this.base.createOneBase(req, dto);
  }

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Override()
  createMany(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateManyDto<Movie>,
  ) {
    return this.base.createManyBase(req, dto);
  }

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Override('updateOneBase')
  coolFunction(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Movie) {
    return this.base.updateOneBase(req, dto);
  }

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Override('replaceOneBase')
  awesomePUT(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Movie) {
    return this.base.replaceOneBase(req, dto);
  }

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Override()
  async deleteOne(@ParsedRequest() req: CrudRequest) {
    return this.base.deleteOneBase(req);
  }
}
