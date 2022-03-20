import { Room } from '../../core/room.entity';

export interface IRoomRepository {
  create(name: string, ownerUuid: string): Promise<Room>;
  getMyRooms(myUuid: string): Promise<Room[]>;
}
