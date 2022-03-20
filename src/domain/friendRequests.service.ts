import { FriendRequest } from '../core/friendRequest.entity';
import { IFriendRequestRepository } from './borders/friendRequestRepository.interface';

export class FriendRequestsService {
  private friendRequestRepo: IFriendRequestRepository;

  constructor(friendRequestRepository: IFriendRequestRepository) {
    this.friendRequestRepo = friendRequestRepository;
  }
  create(
    senderUserName: string,
    receiverUserUuid: string,
    isAccepted: boolean,
  ): Promise<FriendRequest> {
    return this.friendRequestRepo.create(
      senderUserName,
      receiverUserUuid,
      isAccepted,
    );
  }

  get(receiverUserUuid: string): Promise<FriendRequest[]> {
    return this.friendRequestRepo.get(receiverUserUuid);
  }
}
