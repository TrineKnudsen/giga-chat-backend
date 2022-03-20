import { FriendRequest } from './friendRequest.entity';

export class User {
  uuid: string;
  name: string;
  email: string;
  password: string;
  friends: string;
  friendsRequests: FriendRequest[];
}
