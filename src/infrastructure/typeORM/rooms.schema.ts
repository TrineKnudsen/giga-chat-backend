import { EntitySchema } from 'typeorm';
import { Room } from '../../core/room.entity';

export const RoomsSchema = new EntitySchema<Room>({
  name: 'Room',
  target: Room,
  columns: {
    uuid: {
      type: 'uuid',
      generated: 'uuid',
      primary: true,
    },
    name: {
      type: 'varchar',
    },
    ownerUuid: {
      type: 'varchar',
    },
  },
  relations: {},
});
