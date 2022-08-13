import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersRepository } from './user.repository';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, usersRepository],
})
export class UsersModule {}
