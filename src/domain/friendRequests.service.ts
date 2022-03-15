import { FriendRequest } from '../core/friendRequest.entity';
import { IFriendRequestRepository } from './borders/friendRequestRepository.interface';

export class FriendRequestsService {
  private friendRequestRepo: IFriendRequestRepository;

  constructor(friendRequestRepository: IFriendRequestRepository) {
    this.friendRequestRepo = friendRequestRepository;
  }
  create(
    myUserUuid: string,
    friendUserUuid: string,
    isAccepted: boolean,
  ): Promise<FriendRequest> {
    return this.friendRequestRepo.create(
      myUserUuid,
      friendUserUuid,
      isAccepted,
    );
  }
}
