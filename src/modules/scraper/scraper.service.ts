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
        const formattedCountryName = this.getFormattedCountryName(countryName);
        if (formattedCountryName)
          return countries.push([formattedCountryName, []]);
      }
      if (countries.length === 0) return;

      if (element.type === 'text') {
        return countries[countries.length - 1][1].push(element.data);
      }
      if (element.name === 'a') {
        const { href } = element.attribs;
        let text = href;
        if (href.startsWith('mailto:')) {
          const [, email] = href.split('mailto:');
          text = email;
        }
        const link = `<a href="${href}" class="text-info" target="_blank" rel="noopener noreferrer">${text}</a>`;
        return countries[countries.length - 1][1].push(link);
      }
      if (element.name === 'div') {
        const elementChild = element.children.find(child => child.data);
        if (!elementChild) {
          const elementChildren = element.children.find(
            child => child.children,
          );
          const { data } = elementChildren.children.find(child => child.data);
          if (!data) return;

          const formattedCountryName = this.getFormattedCountryName(data);
          if (formattedCountryName)
            return countries.push([formattedCountryName, []]);
        }
        return countries[countries.length - 1][1].push(elementChild.data);
      }
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

  private getFormattedCountryName = (countryName: string): string => {
    const [formattedCountryName] = countryName.replace(/\:$/, '').split(' (');
    if (!!COUNTRY_FLAGS[formattedCountryName]) return formattedCountryName;
  };
}
