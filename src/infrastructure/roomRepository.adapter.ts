import { Injectable } from '@nestjs/common';
import { IRoomRepository } from '../domain/borders/roomRepository.interface';
import { Room } from '../core/room.entity';
import { EntityManager, Repository } from 'typeorm';
import { RoomsSchema } from './typeORM/rooms.schema';

@Injectable()
export class RoomRepositoryAdapter implements IRoomRepository {
  private readonly roomRepo: Repository<Room>;
  constructor(private readonly em: EntityManager) {
    this.roomRepo = em.getRepository(RoomsSchema);
  }
  create(name: string, ownerUuid: string): Promise<Room> {
    return this.roomRepo.save({ name: name, ownerUuid: ownerUuid });
  }

  getMyRooms(myUuid: string): Promise<Room[]> {
    //let rooms: Room[];
    //const myRooms = this.roomRepo.find({
    //where: {
    //ownerUuid: myUuid,
    //},
    //});

    return this.roomRepo.find({
      where: {
        ownerUuid: myUuid,
      },
    });
  }
}
