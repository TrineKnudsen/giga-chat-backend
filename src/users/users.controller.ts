import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UsersService } from '../domain/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUserDto } from './dto/search-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Get('/search/:name')
  search(@Param('name') name: string): Promise<SearchUserDto> {
    return this.usersService.search(name);
  }
}
