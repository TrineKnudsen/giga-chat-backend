import { ApiProperty } from '@nestjs/swagger';

export class RoomDto {
  @ApiProperty()
  name: string;
}
