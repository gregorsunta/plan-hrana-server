import { Scraper } from 'webpuppet/lib/index.js';

(async () => {
  const scraper = new Scraper();

  await scraper.init('https://www.primerjaj-cene.si/');
  await scraper.goto('sl/hrana/fizicni-popis/');

  const handle = await scraper.getExtendedHandleBySelector(
    '.price-compare > script',
  );
  handle.findJSONAndWriteToFile('products.json');
})();
// priceCompareData
