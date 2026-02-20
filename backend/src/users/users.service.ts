import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  
  async create(createUserInput: CreateUserInput) {
    return this.usersRepository.create({
      ...createUserInput,
      password: await this.hashPassword(createUserInput.password),
    });
  }
  
  private async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async findAll() {
    return this.usersRepository.find({});
  }
  
  async findOne(_id: string) {
    return this.usersRepository.findOne({ _id });
  }
  
  async update(_id: string, updateUserInput: UpdateUserInput) {
    const { _id: _omit, password, ...rest } = updateUserInput;
    const update: Record<string, unknown> = { ...rest };
    if (password !== undefined) {
      update.password = await this.hashPassword(password);
    }
    return this.usersRepository.findOneAndUpdate({ _id }, { $set: update });
  }
  
  async remove(_id: string) {
    return this.usersRepository.findOneAndDelete({ _id });
  }
}
