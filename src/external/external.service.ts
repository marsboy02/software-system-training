import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ExternalService {
  url: string =
    'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=GS4AfFAtMpuTaa5EMX6Zgtbp1HiiFmFv3IwNocx9ajQ0k9pd8Atx47e4OxKjw%2FDPVL3LGsB0xwjSCSjxdLqJpg%3D%3D&numOfRows=25&pageNo=1&resultType=json';
  async getStockData() {
    const response = await axios.get(this.url);
    const stockData = response.data.response.body.items.item;

    const modifiedData = stockData.map((item) => {
      return {
        title: item.itmsNm,
        price: item.clpr,
        vs: item.vs,
      };
    });
    return modifiedData;
  }

  detailsUrl: string =
    'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=GS4AfFAtMpuTaa5EMX6Zgtbp1HiiFmFv3IwNocx9ajQ0k9pd8Atx47e4OxKjw%2FDPVL3LGsB0xwjSCSjxdLqJpg%3D%3D&numOfRows=10&pageNo=1&resultType=json&itmsNm=';
  async getDetailData(name: string) {
    const response = await axios.get(this.detailsUrl + name);
    const stockData = response.data.response.body.items.item;

    const modifiedData = stockData.map((item) => {
      return {
        title: item.itmsNm,
        price: item.clpr,
        date: item.basDt,
      };
    });
    return modifiedData;
  }

  async newPriceData(name: string) {
    const response = await axios.get(this.detailsUrl + name);
    const stockData = response.data.response.body.items.item;
    const modifiedData = stockData.map((item) => {
      return {
        title: item.itmsNm,
        price: item.clpr,
        date: item.basDt,
      };
    });
    return modifiedData[0];
  }
}
