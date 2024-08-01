import { Injectable } from '@nestjs/common';
import { PrismaRepository } from '../prisma/prisma.repository';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaRepository: PrismaRepository) {}

  async findAll() {
    const users = await this.prismaRepository.user.findMany();
    return users;
  }
}
