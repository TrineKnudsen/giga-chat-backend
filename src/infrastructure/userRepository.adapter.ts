import { IUserRepository } from '../domain/borders/userRepository.interface';
import { User } from '../core/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { UserSchema } from './typeORM/user.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryAdapter implements IUserRepository {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(UserSchema);
  }

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepo.save({ name: name, email: email, password: password });
  }

  search(name: string): Promise<User> {
    return this.userRepo.findOne({ where: { name: name } });
  }

  login(email: string, password: string): Promise<User> {
    return this.userRepo.findOne({
      where: {
        email: email,
        password: password,
      },
    });
  }

  getUserById(uuid: string): Promise<User> {
    return this.userRepo.findOne({
      where: {
        uuid: uuid,
      },
    });
  }

  async addFriend(myUserUuid: string, friendUserName: string) {
    const user = await this.getUserById(myUserUuid);
    const friendAdded = this.userRepo.findOne({
      where: {
        name: friendUserName,
      },
    });

    const currentUser = this.userRepo.findOne({
      where: {
        uuid: myUserUuid,
      },
    });
    await this.userRepo.save({
      name: user.name,
      email: user.email,
      password: user.password,
      friends: user.friends + ', ' + friendUserName,
    });
  }
}
