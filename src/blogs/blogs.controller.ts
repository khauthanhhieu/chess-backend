import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogDto } from './blogs.schema';
import { BlogsService } from './blogs.service'

@Controller('blogs')
export class BlogsController {
  constructor(private service: BlogsService) { }

  @Get('all')
  async getAll() {
    return await this.service.findAll();
  }

  @Post('create')
  async create(@Body() blogDto: BlogDto) {
    return await this.service.create(blogDto)
  }
}
