import {Injectable} from "@nestjs/common";
import {StockRepository} from "./stock.repository";

@Injectable()
export class StockService {
    constructor(private readonly stockRepository: StockRepository) {}

    createStock() {
        return this.stockRepository.createStock();
    }

    getStock() {
        return this.stockRepository.getStock();
    }

    patchStockSold() {
        return this.stockRepository.patchStockSold();
    }
}