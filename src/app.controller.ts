import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: '서버의 상태를 확인하는 health check API 입니다.'})
  getHello(): string {
    return this.appService.getHello();
  }
}
