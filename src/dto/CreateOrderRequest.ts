import {ApiProperty} from "@nestjs/swagger";

export class CreateOrderRequest {
    @ApiProperty({
        example: '삼성전자',
        description: '종목 이름을 입력합니다.',
        required: true,
    })
    name: string

    @ApiProperty({
        example: '10',
        description: '종목 갯수를 입력합니다.',
        required: true,
    })
    count: number

    @ApiProperty({
        example: '10000',
        description: '매수하고자 하는 가격을 입력합니다.',
        required: true,
    })
    price: number

    @ApiProperty({
        example: '100000',
        description: '총액을 입력합니다.',
        required: true,
    })
    total: number
}