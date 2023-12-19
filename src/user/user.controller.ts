import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: '주식 관련 정보 조회 [총매수,총평가,평가손익,수익률]',
  })
  getUserDate() {
    return this.userService.getUserDate();
  }
}
