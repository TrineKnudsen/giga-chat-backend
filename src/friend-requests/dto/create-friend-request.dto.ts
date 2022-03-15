import { ApiProperty } from '@nestjs/swagger';

export class CreateFriendRequestDto {
  @ApiProperty()
  myUserUuid: string;
  @ApiProperty()
  friendUserUuid: string;
  @ApiProperty()
  isAccepted: boolean;
}
