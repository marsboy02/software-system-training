import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ExternalModule} from "./external/external.module";
import {StockModule} from "./stock/stock.module";
import {UserModule} from "./user/user.module";
import {InfraModule} from "./infra/infra.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {dataSourceConfig} from "./data-source";
import {OrderModule} from "./order/order.module";

@Module({
  imports: [ExternalModule, StockModule, UserModule, InfraModule, TypeOrmModule.forRoot(dataSourceConfig), OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
