import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateImageDto } from "../dto/create-image.dto";
import { ImageService } from "../services/image.service";

@Controller('image')
export class ImageController {

  constructor(private categoryImage: ImageService) {

  }

  @Get()
  async getAll() {
    return await this.categoryImage.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return await this.categoryImage.getOne(id);
  }

  @Post()
  async create(@Body() createImageDto: CreateImageDto) {
    return await this.categoryImage.create(createImageDto);
  }

  @Put(':id')
  async update(@Body() updateImageDto: CreateImageDto, @Param('id') id:number) {
    return await this.categoryImage.update(updateImageDto, id);
  }

  @Delete(':id')
  async delete(@Param ('id') id:number) {
    return await this.categoryImage.delete(id);
  }
}