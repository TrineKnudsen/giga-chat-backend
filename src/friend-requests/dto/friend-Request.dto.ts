import { ApiProperty } from '@nestjs/swagger';

export class FriendRequestDto {
  @ApiProperty()
  senderUserName: string;
}
