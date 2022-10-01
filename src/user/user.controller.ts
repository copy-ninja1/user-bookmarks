import { UserService } from './user.service';
import { editUserDto } from './dto/edit-user.dto';
import { jwtGuard } from './../auth/guard/jwt.guard';
import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { GetUser } from './../auth/decorator';
import { Users } from '@prisma/client';

@UseGuards(jwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: Users) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: editUserDto) {
    return this.usersService.editUser(userId, dto);
  }
}
