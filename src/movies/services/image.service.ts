import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateImageDto } from "../dto/create-image.dto";
import { Image } from "../entities/images.entity";

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async getAll() {
    return await this.imageRepository.find();
  }

  async getOne(id: number) {
    return await this.imageRepository.findOne({where: {id: id}});
  }

  async create(imageDto: CreateImageDto) {
    const actor = this.imageRepository.create(imageDto);
    await this.imageRepository.save(imageDto);
    return actor;
  }

  async update(imageDto: CreateImageDto, id: number) {
    await this.imageRepository.update({id}, imageDto);
    return await this.imageRepository.findOne({id});
  }

  async delete(id: number) {
    return await this.imageRepository.delete({id});
  }
}