import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActorDto } from '../dto/create-actor.dto';
import { Actor } from '../entities/actors.entity';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(Actor)
    private actorRepository: Repository<Actor>,
  ) {}

  async getAll() {
    return await this.actorRepository.find();
  }

  async getOne(id: number) {
    return await this.actorRepository.findOne({ where: { id: id } });
  }

  async create(actorDto: CreateActorDto) {
    const actor = this.actorRepository.create(actorDto);
    await this.actorRepository.save(actorDto);
    return actor;
  }

  async update(actorDto: CreateActorDto, id: number) {
    await this.actorRepository.update(
      { id: actorDto.id },
      {
        name: actorDto.name,
        dob: actorDto.dob,
        sex: actorDto.sex,
        // imageId: actorDto.imageId,
      },
    );
    return await this.actorRepository.findOne({ id });
  }

  async destroy(id: number) {
    const deleteActor = await this.actorRepository.findOne({
      where: { id: id },
    });
    await this.actorRepository.remove(deleteActor);
    return { deleted: true };
  }
}
