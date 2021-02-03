import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument, UserDto } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this.UserModel.findOne({ username })
  }

  async create(user: UserDto): Promise<User | undefined> {
    return await this.UserModel.insertMany(user)
  }
}