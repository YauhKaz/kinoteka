import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Actor } from '../entities/actors.entity';
import { ActorService } from '../services/actor.service';

@Crud({
  model: {
    type: Actor,
  },
})
@Controller('actors')
export class ActorController implements CrudController<Actor> {
  constructor(public service: ActorService) {}
}
