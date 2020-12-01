const config = {
  PORT: process.env.PORT || 8080,
  WEBPAGE_URL: 'http://www.mfa.gov.rs/sr/index.php/konzularni-poslovi/putovanja-u-inostranstvo/vesti-za-putovanja-u-inostranstvo/22669-----------covid-19?lang=lat',
};

export const CLOSED_BORDER = 'CLOSED_BORDER';
export const NEGATIVE_TEST_REQUIRED = 'NEGATIVE_TEST_REQUIRED';
export const NO_TEST_REQUIRED = 'NO_TEST_REQUIRED';
export const OPEN_BORDER = 'OPEN_BORDER';
export const QUARANTINE_REQUIRED = 'QUARANTINE_REQUIRED';
export const SKIP_SENTENCE = 'SKIP_SENTENCE';

export const OPEN_BORDER_INTENTS = [NEGATIVE_TEST_REQUIRED, NO_TEST_REQUIRED, QUARANTINE_REQUIRED];
export const SKIP_INTENTS = [OPEN_BORDER, SKIP_SENTENCE];

export default config;
