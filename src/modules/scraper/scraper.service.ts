import { Injectable } from '@nestjs/common';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import { isEnv } from 'common/utils';
import { CountryInfo } from 'modules/country/country.types';
import { pageSource } from './scraper.scraped-data';

@Injectable()
export class ScraperService {
  getPageSource = async (url: string): Promise<string> => {
    if (isEnv('development')) return pageSource;

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('body');
    const html = await page.evaluate(
      (): string => document.getElementById('text').outerHTML,
    );
    await page.close();
    return html;
  };

  getCountriesInfo = (html: string): CountryInfo[] => {
    const $ = cheerio.load(html);
    const countryElements = $('#text strong');
    const elements = countryElements.parent().contents();

    const countries = [];
    elements.each((_, element) => {
      if (element.name === 'strong') {
        const { data: countryName } = element.children.find(
          child => child.data,
        );
        return countries.push([countryName, []]);
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

    return countries.map(
      (countryInfo): CountryInfo => {
        const [countryName, info] = countryInfo;
        return {
          name: countryName.replace(/\:$/, ''),
          info: info.join(' ').replace(/^,/, ''),
        };
      },
    );
  };
}
