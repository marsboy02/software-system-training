import { ApiProperty } from '@nestjs/swagger';

export class GetOrderOneRequest {
  @ApiProperty({
    example: '삼성전자',
    description: '주식 이름을 입력합니다',
    required: true,
  })
  name: string;
}
