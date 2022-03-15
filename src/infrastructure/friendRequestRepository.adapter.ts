import { IFriendRequestRepository } from '../domain/borders/friendRequestRepository.interface';
import { FriendRequest } from '../core/friendRequest.entity';
import { EntityManager, Repository } from 'typeorm';
import { FriendRequestSchema } from './typeORM/friendRequest.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FriendRequestRepositoryAdapter
  implements IFriendRequestRepository
{
  private readonly friendRequestRepo: Repository<FriendRequest>;
  constructor(private readonly em: EntityManager) {
    this.friendRequestRepo = em.getRepository(FriendRequestSchema);
  }

  create(
    myUserUuid: string,
    friendUserUuid: string,
    isAccepted: boolean,
  ): Promise<FriendRequest> {
    return this.friendRequestRepo.save({
      myUserUuid: myUserUuid,
      friendUserUuid: friendUserUuid,
      isAccepted: isAccepted,
    });
  }
}
