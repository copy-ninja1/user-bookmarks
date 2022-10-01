import { editUserDto } from './dto/edit-user.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private Prisma: PrismaService) {}

  async editUser(userId: number, dto: editUserDto) {
    console.log({ userId });
    const user = await this.Prisma.users.update({
      where: { id: userId },
      data: { ...dto },
    });
    delete user.hash;
    return user;
  }
}
