import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { CategoryService } from "../services/category.service";

@Controller('category')
export class CategoryController {

  constructor(private categoryService: CategoryService) {

  }

  @Get()
  async getAll() {
    return await this.categoryService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return await this.categoryService.getOne(id);
  }

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }

  @Put(':id')
  async update(@Body() updateCategoryDto: CreateCategoryDto, @Param('id') id:number) {
    return await this.categoryService.update(updateCategoryDto, id);
  }

  @Delete(':id')
  async delete(@Param ('id') id:number) {
    return await this.categoryService.delete(id);
  }
}