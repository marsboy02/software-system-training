import { ApiProperty} from "@nestjs/swagger";

export class DetailStockDataRequest {
    @ApiProperty({
        example: '삼성전자',
        description: '입력한 주식명에 따른 정보를 조회합니다 (10개)',
        required: true,
    })
    name: string
}