"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./preprocessor/index");
const index_2 = require("./uploader/index");
// @ts-ignore
const products_1 = __importDefault(require("../data/products"));
console.log('SCRIPT LOADED');
const sync = () => {
    console.log('Starting sync process');
    const preprocessedProductsData = (0, index_1.preprocessData)(products_1.default);
    (0, index_2.uploadProducts)(preprocessedProductsData);
};
sync();
