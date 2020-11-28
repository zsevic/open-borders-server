import Country from './countries.model';
import { CLOSED_BORDER, NEGATIVE_TEST_REQUIRED, NO_TEST_REQUIRED, QUARANTINE_REQUIRED } from '../../config/constants';

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
    $in: [CLOSED_BORDER, NEGATIVE_TEST_REQUIRED, NO_TEST_REQUIRED, QUARANTINE_REQUIRED],
  },
});
