import { Injectable } from '@nestjs/common';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import { isEnv } from 'common/utils';
import { COUNTRY_FLAGS } from 'modules/country/country.constants';
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
      (): string => document.querySelector('.field--text').outerHTML,
    );
    await page.close();
    return html;
  };

  getCountriesInfo = (html: string): CountryInfo[] => {
    const $ = cheerio.load(html);
    const countryElements = $('.field--text p');
    const elements = countryElements.contents();

    const countries = [];
    elements.each((_, element) => {
      if (element.name === 'strong') {
        const countryName = element.children.find(child => child.data);
        if (!countryName || countryName.data.trim().length === 0) return;

        const formattedCountryName = this.getFormattedCountryName(
          countryName.data,
        );
        if (formattedCountryName)
          return countries.push([formattedCountryName, []]);
        if (countries.length > 0) {
          return countries[countries.length - 1][1].push(countryName.data);
        }
      }
      if (countries.length === 0) return;

      if (element.type === 'text') {
        return countries[countries.length - 1][1].push(element.data);
      }
      if (element.name === 'a') {
        if (!element.attribs.href)
          return this.addCountryInfo(countries, element);

        const { href } = element.attribs;
        let text = href;
        if (href.startsWith('mailto:')) {
          const [, email] = href.split('mailto:');
          text = email;
        }
        const link = `<a href="${href}" class="text-info" target="_blank" rel="noopener noreferrer">${text}</a>`;
        return countries[countries.length - 1][1].push(link);
      }
      if (['u', 'em'].includes(element.name))
        return this.addCountryInfo(countries, element);
    });

    return countries
      .map(
        (countryInfo): CountryInfo => {
          const [name, info] = countryInfo;
          return {
            name,
            info: info
              .filter((info: string) => info !== '\n')
              .join(' ')
              .replace(/^,/, '')
              .trim(),
          };
        },
      )
      .filter((countryInfo): boolean => countryInfo.info.length > 0);
  };

  private addCountryInfo = (countries: CountryInfo[], element): number => {
    const text = element.children.find(child => child.data);
    if (!text || text.data.trim().length === 0) return;

    return countries[countries.length - 1][1].push(text.data);
  };

  private getFormattedCountryName = (countryName: string): string => {
    const [formattedCountryName] = countryName
      .replace(/\: $/, '')
      .trim()
      .split(' (');
    if (!!COUNTRY_FLAGS[formattedCountryName]) return formattedCountryName;
  };
}
