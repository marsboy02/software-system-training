import { Controller, Get, Param } from '@nestjs/common';
import { ExternalService } from './external.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DetailStockDataRequest } from '../dto/DetailStockDataRequest';

@Controller('external')
@ApiTags('external')
export class ExternalController {
  constructor(private readonly externalService: ExternalService) {}

  @Get()
  @ApiOperation({ summary: '모든 주식 데이터를 조회합니다.' })
  async getStockData() {
    return this.externalService.getStockData();
  }

  @Get(':name')
  @ApiOperation({ summary: '특정 주식 데이터를 조회합니다. ' })
  async getDetailData(@Param() dto: DetailStockDataRequest) {
    return this.externalService.getDetailData(dto.name);
  }
}
