import * as countriesRepository from './countries.repository';

export const bulkUpsert = async (countries) => countriesRepository.bulkUpsert(countries);

export const getCountryList = async () => countriesRepository.getCountryList();
