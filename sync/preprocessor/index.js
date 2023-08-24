"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocessData = void 0;
const preprocessData = (productsData) => {
    return productsData.map((product) => {
        const productPrices = product.prices.map((price) => {
            const { 'količina (mL)': kolicinaValue } = price, otherProperties = __rest(price, ['količina (mL)']);
            return Object.assign(Object.assign({}, otherProperties), { kolicina_mL: kolicinaValue });
        });
        return Object.assign(Object.assign({}, product), { prices: productPrices });
    });
};
exports.preprocessData = preprocessData;
// const productsJSON = JSON.stringify(preprocessedProducts);
// fs.writeFile('./data/products_preprocessed.js', productsJSON, (err) => {
//   if (err) throw err;
// });
// preprocessData(productsData);
