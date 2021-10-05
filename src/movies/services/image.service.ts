import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Image } from '../entities/images.entity';

@Injectable()
export class ImageService extends TypeOrmCrudService<Image> {
  constructor(@InjectRepository(Image) repo) {
    super(repo);
  }
}
