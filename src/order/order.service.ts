import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { CreateOrderRequest } from '../dto/CreateOrderRequest';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  createOrder(body: CreateOrderRequest) {
    return this.orderRepository.createOrder(body);
  }

  getOrder() {
    return this.orderRepository.getAllOrder();
  }

  getOrderOne(name: string) {
    return this.orderRepository.getOrderOne(name);
  }

  putOrderSold() {
    return this.orderRepository.putOrderSold();
  }
}
