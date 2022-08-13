import {Injectable, NotFoundException} from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { GetUserFilterDto } from './dtos/get-user-filter.dto';
import { usersRepository } from './user.repository';
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: usersRepository) {}

  public getUsers(filter: GetUserFilterDto) {
    return this.usersRepository.getAllUsers(filter);
  }

  public getUsersWithTasks(filterDto: GetUserFilterDto) {
  }

  public async getUserById(id: string) {
    const user = await this.usersRepository.getUserById(id)

    if( !user ){
      throw new NotFoundException(`User with ID ${id} not found`)
    }

    return user;
  }

  public async deleteUserById(id: string): Promise<void> {
    const user = await this.usersRepository.delete(id);

    if (user.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  public createUser(user: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(user);
  }

  public async putUserById(id: string, userInfo: UpdateUserDto) {
    const user = await this.getUserById(id);
    return this.usersRepository.save({ ...user, ...userInfo });
  }
}
