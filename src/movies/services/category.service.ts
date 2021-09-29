import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { Category } from "../entities/categories.entity";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAll() {
    return await this.categoryRepository.find();
  }

  async getOne(id: number) {
    return await this.categoryRepository.findOne({where: {id: id}});
  }

  async create(actorDto: CreateCategoryDto) {
    const actor = this.categoryRepository.create(actorDto);
    await this.categoryRepository.save(actorDto);
    return actor;
  }

  async update(actorDto: CreateCategoryDto, id: number) {
    await this.categoryRepository.update({id}, actorDto);
    return await this.categoryRepository.findOne({id});
  }

  async delete(id: number) {
    return await this.categoryRepository.delete({id});
  }
}