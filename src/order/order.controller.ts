import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderRequest } from '../dto/CreateOrderRequest';
import { GetOrderOneRequest } from '../dto/GetOrderOneRequest';

@Controller('order')
@ApiTags('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: '종목을 주문합니다.' })
  createOrder(@Body() body: CreateOrderRequest) {
    return this.orderService.createOrder(body);
  }

  @Get()
  @ApiOperation({ summary: '구매한 종목을 모두 조회합니다.' })
  getOrder() {
    return this.orderService.getOrder();
  }

  @Get(':name')
  @ApiOperation({ summary: '특정 종목의 구매 내역을 조회합니다.' })
  getOrderOne(@Param() dto: GetOrderOneRequest) {
    return this.orderService.getOrderOne(dto.name);
  }

  @Put()
  @ApiOperation({ summary: '종목을 판매합니다.' })
  putOrderSOld() {
    return this.orderService.putOrderSold();
  }
}
