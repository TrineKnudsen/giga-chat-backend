import { ApiProperty } from '@nestjs/swagger';

export class CreateFriendRequestDto {
  @ApiProperty()
  senderUserName: string;
  @ApiProperty()
  receiverUserUuid: string;
  @ApiProperty()
  isAccepted: boolean;
}
