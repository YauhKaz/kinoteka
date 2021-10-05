import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from '../entities/categories.entity';
import { CategoryService } from '../services/category.service';

@Crud({
  model: {
    type: Category,
  },
})
@Controller('categories')
export class CategoryController implements CrudController<Category> {
  constructor(public service: CategoryService) {}
}
