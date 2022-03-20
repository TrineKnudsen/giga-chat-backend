import { IRoomRepository } from './borders/roomRepository.interface';
import { Room } from '../core/room.entity';

export class RoomsService {
  private roomRepo: IRoomRepository;

  constructor(roomRepository: IRoomRepository) {
    this.roomRepo = roomRepository;
  }

  create(name: string, ownerUuid: string): Promise<Room> {
    return this.roomRepo.create(name, ownerUuid);
  }
}
