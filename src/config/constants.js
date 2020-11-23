const config = {
  MONGODB_URL:
    process.env.MONGODB_URI
    || process.env.MONGODB_URL
    || 'mongodb://localhost:27017/open-borders-db',
  PORT: process.env.PORT || 8080,
  WEBPAGE_URL: 'http://www.mfa.gov.rs/sr/index.php/konzularni-poslovi/putovanja-u-inostranstvo/vesti-za-putovanja-u-inostranstvo/22669-----------covid-19?lang=lat',
};

export const CLOSED_BORDER = 'CLOSED_BORDER';
export const NEGATIVE_TEST_REQUIRED = 'NEGATIVE_TEST_REQUIRED';
export const NO_TEST_REQUIRED = 'NO_TEST_REQUIRED';
export const OPEN_BORDER = 'OPEN_BORDER';

export default config;
