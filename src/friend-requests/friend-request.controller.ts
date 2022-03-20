import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { FriendRequestsService } from '../domain/friendRequests.service';
import { CreateFriendRequestDto } from './dto/create-friend-request.dto';
import { FriendRequest } from '../core/friendRequest.entity';
import { FriendRequestDto } from './dto/friend-Request.dto';

@Controller('friend-requests')
export class FriendRequestController {
  constructor(
    @Inject('FriendRequestsService')
    private readonly friendRequestsService: FriendRequestsService,
  ) {}

  @Post()
  create(@Body() createFriendRequestDto: CreateFriendRequestDto) {
    return this.friendRequestsService.create(
      createFriendRequestDto.senderUserName,
      createFriendRequestDto.receiverUserUuid,
      createFriendRequestDto.isAccepted,
    );
  }

  @Get('/:receiverUserUuid')
  getFriendRequests(
    @Param('receiverUserUuid') receiverUserUuid: string,
  ): Promise<FriendRequestDto[]> {
    return this.friendRequestsService.get(receiverUserUuid);
  }
}
