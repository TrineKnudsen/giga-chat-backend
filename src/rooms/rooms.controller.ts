import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsService } from '../domain/rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(
    @Inject('RoomsService') private readonly roomsService: RoomsService,
  ) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto, ownerUuid: string) {
    return this.roomsService.create(createRoomDto.name, ownerUuid);
  }
}
