import { Injectable } from '@nestjs/common';
import { RedisCacheService } from 'modules/redis-cache/redis-cache.service';
import { CountryInfo } from './country.types';

@Injectable()
export class CountryService {
  constructor(private readonly redisCacheService: RedisCacheService) {}

  getCountryList = async (): Promise<CountryInfo[]> => {
    const classifiedCountries = await this.redisCacheService.get('countries');
    if (!classifiedCountries) return [];

    return JSON.parse(classifiedCountries);
  };
}
