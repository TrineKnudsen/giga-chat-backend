import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsSchema } from '../infrastructure/typeORM/rooms.schema';
import { RoomsController } from './rooms.controller';
import { RoomRepositoryAdapter } from '../infrastructure/roomRepository.adapter';
import { IRoomRepository } from '../domain/borders/roomRepository.interface';
import { RoomsService } from '../domain/rooms.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoomsSchema])],
  controllers: [RoomsController],
  providers: [
    {
      provide: 'RoomRepository',
      useClass: RoomRepositoryAdapter,
    },
    {
      inject: ['RoomRepository'],
      provide: 'RoomsService',
      useFactory: (roomRepo: IRoomRepository) => new RoomsService(roomRepo),
    },
  ],
})
export class RoomsModule {}
