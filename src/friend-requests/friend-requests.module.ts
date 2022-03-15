import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRequestSchema } from '../infrastructure/typeORM/friendRequest.schema';
import { FriendRequestController } from './friend-request.controller';
import { FriendRequestRepositoryAdapter } from '../infrastructure/friendRequestRepository.adapter';
import { IFriendRequestRepository } from '../domain/borders/friendRequestRepository.interface';
import { FriendRequestsService } from '../domain/friendRequests.service';

@Module({
  imports: [TypeOrmModule.forFeature([FriendRequestSchema])],
  controllers: [FriendRequestController],
  providers: [
    {
      provide: 'FriendRequestRepository',
      useClass: FriendRequestRepositoryAdapter,
    },
    {
      inject: ['FriendRequestRepository'],
      provide: 'FriendRequestsService',
      useFactory: (friendRequestRepository: IFriendRequestRepository) =>
        new FriendRequestsService(friendRequestRepository),
    },
  ],
})
export class FriendRequestsModule {}
