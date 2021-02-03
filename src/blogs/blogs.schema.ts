import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @Prop({ unique: true })
  content: string;

  @Prop({ required: true })
  createdAt: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);

export class BlogDto {
  readonly content: string
  readonly createdAt: string
}
