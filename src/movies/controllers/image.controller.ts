import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Image } from '../entities/images.entity';
import { ImageService } from '../services/image.service';

@Crud({
  model: {
    type: Image,
  },
})
@Controller('images')
export class ImageController implements CrudController<Image> {
  constructor(public service: ImageService) {}
}
