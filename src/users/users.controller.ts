import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserFilterDto } from './dtos/get-user-filter.dto';
import { User } from './user.entity'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @Get()
  // async getAllUsers(): Promise<User[]> {
  //   return this.userManagementService.getAllUsers();
  // }

  @Get()
  async getUsers(@Query() filterDto: GetUserFilterDto): Promise<User[]> {
    return this.usersService.getUsers(filterDto);
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }


  @Delete('/:id')
  async deleteUserById(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUserById(id);
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: CreateUserDto,
  ) {
    return this.usersService.putUserById(id, body);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.createUser(body);
  }
}
