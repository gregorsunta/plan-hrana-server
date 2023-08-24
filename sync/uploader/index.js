"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProducts = void 0;
const data_source_1 = require("../../src/data-source");
const Product_entity_1 = require("../../src/entity/Product.entity");
const Price_entity_1 = require("../../src/entity/Price.entity");
data_source_1.AppDataSource.initialize();
const uploadProducts = (preprocessedProductsData) => __awaiter(void 0, void 0, void 0, function* () {
    const productsRepo = data_source_1.AppDataSource.getRepository(Product_entity_1.Product);
    const pricesRepo = data_source_1.AppDataSource.getRepository(Price_entity_1.Price);
    const pauseDuration = 100;
    for (let i = 0; i < preprocessedProductsData.length; i++) {
        if (i % 100 === 0) {
            console.info('uploaded', i, 'products');
            console.info('calling timeout');
            yield new Promise((resolve) => setTimeout(resolve, pauseDuration));
        }
        const product = preprocessedProductsData[i];
        const productEntity = productsRepo.create(product);
        const priceEntities = product.prices.map((price) => {
            return pricesRepo.create(price);
        });
        productsRepo.save(productEntity);
        pricesRepo.save(priceEntities);
    }
    console.info('Upload finished. ');
    console.info('total uploaded:', preprocessedProductsData.length, 'products');
});
exports.uploadProducts = uploadProducts;
