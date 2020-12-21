export const isEnv = (environment: string): boolean => {
  return process.env.NODE_ENV === environment;
};

export { logger } from './logger';
