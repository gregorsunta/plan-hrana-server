export const preprocessProducts = (productsData: string) => {
  console.info('Starting preprocessing');
  const js = JSON.parse(productsData);
  return js.products.map((product: any) => {
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

export const parseFromJSON = (productsData: string) => {
  console.info('Starting preprocessing');
  return JSON.parse(productsData);
};
