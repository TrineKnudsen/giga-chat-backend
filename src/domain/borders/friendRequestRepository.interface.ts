import { FriendRequest } from '../../core/friendRequest.entity';

export interface IFriendRequestRepository {
  create(
    myUserUuid: string,
    friendUserUuid: string,
    isAccepted: boolean,
  ): Promise<FriendRequest>;
}
