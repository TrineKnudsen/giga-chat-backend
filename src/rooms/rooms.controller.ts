import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsService } from '../domain/rooms.service';
import { RoomDto } from './dto/room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(
    @Inject('RoomsService') private readonly roomsService: RoomsService,
  ) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(
      createRoomDto.name,
      createRoomDto.ownerUuid,
    );
  }

  @Get('/:ownerUuid')
  getMyRooms(@Param('ownerUuid') ownerUuid: string): Promise<RoomDto[]> {
    return this.roomsService.findMyRooms(ownerUuid);
  }
}
