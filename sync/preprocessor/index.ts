export const preprocessData = (productsData: any) => {
  return productsData.map((product: any) => {
    const productPrices = product.prices.map((price: any) => {
      const { 'količina (mL)': kolicinaValue, ...otherProperties } = price;
      return {
        ...otherProperties,
        kolicina_mL: kolicinaValue,
      };
    });
    return { ...product, prices: productPrices };
  });
};

// const productsJSON = JSON.stringify(preprocessedProducts);
// fs.writeFile('./data/products_preprocessed.js', productsJSON, (err) => {
//   if (err) throw err;
// });

// preprocessData(productsData);
