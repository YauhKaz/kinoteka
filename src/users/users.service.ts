import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private readonly users = [];
  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'admin',
        mail: 'admin@admin',
        password: 'admin',
        isAdmin: true,
      },
      {
        userId: 2,
        username: 'guess',
        mail: 'guess@guess',
        password: 'guess',
        isAdmin: false,
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
