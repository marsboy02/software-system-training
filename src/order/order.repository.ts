import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OrderEntity } from '../libs/entity/order.entity';
import { CreateOrderRequest } from '../dto/CreateOrderRequest';

@Injectable()
export class OrderRepository {
  constructor(private readonly dataSource: DataSource) {}

  async createOrder(body: CreateOrderRequest) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(this.makeOrderEntity(body));
      await queryRunner.commitTransaction();
    } catch (error) {
      throw error;
    }
    return 'created!';
  }

  getAllOrder() {
    return this.dataSource
      .createQueryBuilder()
      .select()
      .from(OrderEntity, 'Order')
      .getRawMany();
  }

  getOrderOne(name: string) {
    return this.dataSource
      .createQueryBuilder()
      .select()
      .from(OrderEntity, 'Order')
      .where(`Order.name =:name`, { name })
      .getRawMany();
  }

  putOrderSold() {
    return 'putOrderSold';
  }

  private makeOrderEntity(body: CreateOrderRequest) {
    const order = new OrderEntity();
    order.name = body.name;
    order.count = body.count;
    order.price = body.price;
    return order;
  }
}
