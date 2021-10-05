import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { Category } from '../entities/categories.entity';

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
    return await this.categoryRepository.findOne({ where: { id: id } });
  }

  async create(categoryDto: CreateCategoryDto) {
    const actor = this.categoryRepository.create(categoryDto);
    await this.categoryRepository.save(categoryDto);
    return actor;
  }

  async update(categoryDto: CreateCategoryDto, id: number) {
    await this.categoryRepository.update(
      { id: categoryDto.id },
      {
        title: categoryDto.title,
        description: categoryDto.description,
      },
    );
    return await this.categoryRepository.findOne({ id });
  }

  async destroy(id: number) {
    const deleteCategory = await this.categoryRepository.findOne({
      where: { id: id },
    });
    await this.categoryRepository.remove(deleteCategory);
    return { deleted: true };
  }
}
