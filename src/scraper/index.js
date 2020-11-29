import axios from 'axios';
import cheerio from 'cheerio';

export const getPageSource = async (url) => axios(url).then((res) => res.data);

export const getParsedPageSource = (data) => {
  const $ = cheerio.load(data);
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
      const url = `<a href="${href}" target="_blank" rel="noopener noreferrer">${href}</a>`;
      return countries[countries.length - 1][1].push(url);
    }
  });

  return countries.map((countryInfo) => {
    const [countryName, info] = countryInfo;
    return {
      name: countryName,
      info: info.join(' '),
    };
  });
};
