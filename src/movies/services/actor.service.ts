import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Actor } from '../entities/actors.entity';

@Injectable()
export class ActorService extends TypeOrmCrudService<Actor> {
  constructor(@InjectRepository(Actor) repo) {
    super(repo);
  }
}
