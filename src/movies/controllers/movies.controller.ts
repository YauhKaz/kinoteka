import { Controller, Get } from "@nestjs/common";

@Controller('movies')
export class MovieController {
  @Get()
  all() {
    return 'all products';
  }
}