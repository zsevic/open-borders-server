import Country from './countries.model';

export const bulkUpsert = async (countries) => Country.bulkWrite(countries.map((country) => ({
  updateOne: {
    filter: { name: country.name },
    update: { $set: country },
    upsert: true,
  },
})), {
  ordered: false,
});

export const getCountryList = async () => Country.find({});
