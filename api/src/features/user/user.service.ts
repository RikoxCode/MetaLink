import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import * as mongoose from 'mongoose';
import BaseFunctions from 'src/core/base-functions';


@Injectable()
export class UserService {

  constructor(
    @InjectModel('User')
    private userModel: mongoose.Model<User>        
) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOneById(userId: string) {
    return await this.userModel.findOne({ _id: userId });
  }

  async findOneByUsername(username: string): Promise<User[]> {
    return await this.userModel.find({ name: username });
  }

  async create(user: User): Promise<User> {
    user.password = BaseFunctions._hash(user.password);
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async delete(userId: string) {
    return await this.userModel.deleteOne({ userId: userId });
  }

  async edit(userId: string, user: User) {
    if (user.password != BaseFunctions._hash(user.password)) {
      user.password = BaseFunctions._hash(user.password);
    }
    return await this.userModel.updateOne({ userId: userId }, user);
  }
}