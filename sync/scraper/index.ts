import { Scraper } from 'webpuppet/lib/index.js';

export const scrape = async (outputPath: string) => {
  const scraper = new Scraper();

  await scraper.init('https://www.primerjaj-cene.si/');
  await scraper.goto('sl/hrana/fizicni-popis/');

  const handle = await scraper.getExtendedHandleBySelector(
    '.price-compare > script',
  );

  if (!handle) {
    console.error('Handle is not defined.');
    return;
  }

  await handle.findJSONAndWriteToFile(outputPath);
};

// priceCompareData
