import Country from './countries.model';
import { NEGATIVE_TEST_REQUIRED, OPEN_BORDER, QUARANTINE_REQUIRED } from '../../config/constants';

export const bulkUpsert = async (countries) => Country.bulkWrite(countries.map((country) => ({
  updateOne: {
    filter: { name: country.name },
    update: { $set: country },
    upsert: true,
  },
})), {
  ordered: false,
});

export const getCountryList = async () => Country.find({
  status: {
    $in: [NEGATIVE_TEST_REQUIRED, OPEN_BORDER, QUARANTINE_REQUIRED],
  },
});
