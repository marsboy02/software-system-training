import {Controller, Get, Post, Put} from "@nestjs/common";
import {StockService} from "./stock.service";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller('stock')
@ApiTags('stock')
export class StockController {
    constructor(private readonly stockService: StockService) {}

    // @Post()
    // @ApiOperation({ summary: '주식을 구매합니다.' })
    createStock() {
        return this.stockService.createStock();
    }

    @Get()
    @ApiOperation({ summary: '구매한 주식을 조회합니다. (deprecated)' })
    getStock() {
        return this.stockService.getStock();
    }

    // @Put()
    // @ApiOperation({ summary: '주식을 판매합니다.' })
    patchStockSold() {
        return this.stockService.patchStockSold();
    }
}