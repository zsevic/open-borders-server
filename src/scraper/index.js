import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

export const getPageSource = async (url) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('body');
  const html = await page.evaluate(() => document.body.innerHTML); // eslint-disable-line
  await page.close();
  return html;
};

export const getCountriesInfo = (html) => {
  const $ = cheerio.load(html);
  const countryElements = $('#text strong');
  const elements = countryElements.parent().contents();

  const countries = [];
  elements.each((_, element) => {
    if (element.name === 'strong') {
      const [mainElement, secondElement] = element.children;
      if (!mainElement.data) {
        if (!secondElement) return;
        return countries.push([secondElement.data, []]);
      }
      return countries.push([mainElement.data, []]);
    }
    if (element.type === 'text') {
      if (countries.length === 0) return;
      return countries[countries.length - 1][1].push(element.data);
    }
    if (element.name === 'a') {
      if (countries.length === 0) return;
      const { href } = element.attribs;
      let text = href;
      if (href.startsWith('mailto:')) {
        const [, email] = href.split('mailto:');
        text = email;
      }
      const link = `<a href="${href}" class="text-info" target="_blank" rel="noopener noreferrer">${text}</a>`;
      return countries[countries.length - 1][1].push(link);
    }
  });

  return countries.map((countryInfo) => {
    const [countryName, info] = countryInfo;
    return {
      name: countryName.replace(/\:$/, ''),
      info: info.join(' ').replace(/^,/, ''),
    };
  });
};
