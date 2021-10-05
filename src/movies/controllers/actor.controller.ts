import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateActorDto } from '../dto/create-actor.dto';
import { ActorService } from '../services/actor.service';

@Controller('actor')
export class ActorController {
  constructor(private actorService: ActorService) {}

  @Get()
  async getAll() {
    return await this.actorService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return await this.actorService.getOne(id);
  }

  @Post()
  async create(@Body() createActorDto: CreateActorDto) {
    return await this.actorService.create(createActorDto);
  }

  @Put(':id')
  async update(
    @Body() updateActorDto: CreateActorDto,
    @Param('id') id: number,
  ) {
    return await this.actorService.update(updateActorDto, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.actorService.destroy(id);
  }
}
