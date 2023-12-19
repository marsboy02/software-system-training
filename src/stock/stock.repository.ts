import {Injectable} from "@nestjs/common";
import {DataSource} from "typeorm";
import {StockEntity} from "../libs/entity/stock.entity";

@Injectable()
export class StockRepository {
    constructor(private readonly dataSource: DataSource) {}

    createStock() {
        return "createStock";
    }

    getStock() {
        return this.dataSource
            .createQueryBuilder()
            .select()
            .from(StockEntity, 'Stock')
            .getRawMany();
    }

    patchStockSold() {
        return "patchStockSold";
    }


}