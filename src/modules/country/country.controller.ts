import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryInfo } from './country.types';

@Controller('api/countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getCountryList(): Promise<CountryInfo[]> {
    return this.countryService.getCountryList();
  }
}
