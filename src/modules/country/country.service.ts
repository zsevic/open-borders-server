import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CountryInfo } from './country.types';

@Injectable()
export class CountryService {
  constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) {}

  getCountryList = async (): Promise<CountryInfo[]> => {
    const classifiedCountries = await this.cacheService.get('countries');
    if (!classifiedCountries) return [];

    const countryList = JSON.parse(classifiedCountries);
    return countryList.map(
      (country: CountryInfo): CountryInfo => ({
        ...country,
        name: this.getFormattedCountryName(country.name),
      }),
    );
  };

  private getFormattedCountryName = (name: string): string =>
    name
      .split(' ')
      .map(word => {
        if (word === 'I') return word.toLowerCase();
        if (word === 'SAD') return word;
        return word.charAt(0) + word.substring(1).toLowerCase();
      })
      .join(' ');
}
