import { Controller, Get } from '@nestjs/common';
import { BlogsService } from './blogs.service'

@Controller('blogs')
export class BlogsController {
  constructor(private service: BlogsService) { }

  @Get('all')
  getAll() {
    return this.service.findAll();
  }
}
