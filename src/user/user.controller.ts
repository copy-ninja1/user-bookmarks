import { jwtGuard } from './../auth/guard/jwt.guard';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GetUser } from './../auth/decorator';
import { Users } from '@prisma/client';

@UseGuards(jwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: Users) {
    return user;
  }
}
