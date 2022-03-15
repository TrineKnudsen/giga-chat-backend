import { EntitySchema } from 'typeorm';
import { FriendRequest } from '../../core/friendRequest.entity';

export const FriendRequestSchema = new EntitySchema<FriendRequest>({
  name: 'FriendRequest',
  target: FriendRequest,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    myUserUuid: {
      type: 'varchar',
    },
    friendUserUuid: {
      type: 'varchar',
    },
    isAccepted: {
      type: 'boolean',
    },
  },
  relations: {},
});
