import * as countriesService from './countries.service';

export const getCountryListHandler = async (_, res) => {
  const countryList = await countriesService.getCountryList();

  return res.json(countryList);
};
