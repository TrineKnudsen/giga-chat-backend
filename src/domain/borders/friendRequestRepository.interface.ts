import { FriendRequest } from '../../core/friendRequest.entity';

export interface IFriendRequestRepository {
  create(
    senderUserName: string,
    receiverUserUuid: string,
    isAccepted: boolean,
  ): Promise<FriendRequest>;

  get(receiverUserUuid: string): Promise<FriendRequest[]>;
}
