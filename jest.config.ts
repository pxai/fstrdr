import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'jest-react-native',
  testEnvironment: 'jsdom',
  setupFiles: ['./test/setupTests.js']
};
export default config;
