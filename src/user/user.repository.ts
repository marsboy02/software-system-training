import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OrderEntity } from '../libs/entity/order.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly dataSource: DataSource) {}

  getUserData() {
    return this.dataSource
      .createQueryBuilder()
      .select('count')
      .addSelect('price')
      .from(OrderEntity, 'Order')
      .getRawMany();
  }
}
