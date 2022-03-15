import { Body, Controller, Inject, Post } from '@nestjs/common';
import { FriendRequestsService } from '../domain/friendRequests.service';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';

@Controller('friend-requests')
export class FriendRequestController {
  constructor(
    @Inject('FriendRequestsService')
    private readonly friendRequestsService: FriendRequestsService,
  ) {}

  @Post()
  create(@Body() createFriendRequestDto: CreateFriendRequestDto) {
    return this.friendRequestsService.create(
      createFriendRequestDto.myUserUuid,
      createFriendRequestDto.friendUserUuid,
      createFriendRequestDto.isAccepted,
    );
  }
}
