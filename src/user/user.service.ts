import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { ExternalService } from '../external/external.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly externalService: ExternalService,
  ) {}
  async getUserDate() {
    const data = await this.userRepository.getUserData();
    let total = 0;
    let totalCount = 0;
    data.forEach((item) => {
      const subtotal = item.count * item.price;
      totalCount += item.count;
      total += subtotal;
    });
    const nowPrice = await this.externalService.newPriceData('삼성전자');
    const totalEvaluation = totalCount * +nowPrice.price;

    return {
      totalBuy: total,
      totalEvaluation: totalEvaluation,
      valuationProfitAndLoss: totalEvaluation - total,
      rateOfReturn: Math.floor(((totalEvaluation - total) / total) * 100),
    };
  }
}
