import { Room } from '../../core/room.entity';

export interface IRoomRepository {
  create(name: string): Promise<Room>;
}
