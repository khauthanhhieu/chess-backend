import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument, BlogDto } from './blogs.schema';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async findAll(): Promise<BlogDocument[]> {
    return await this.blogModel.find()
  }

  async create(blog: BlogDto): Promise<BlogDocument> {
    return await this.blogModel.insertMany(blog)
  }
}
