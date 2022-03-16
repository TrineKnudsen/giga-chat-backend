import { User } from '../core/user.entity';
import { IUserRepository } from './borders/userRepository.interface';

export class UsersService {
  private userRepo: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepo = userRepository;
  }

  create(name: string, email: string, password: string): Promise<User> {
    return this.userRepo.create(name, email, password);
  }

  search(name: string): Promise<User> {
    return this.userRepo.search(name);
  }

  login(email: string, password: string) {
    return this.userRepo.login(email, password);
  }
}
