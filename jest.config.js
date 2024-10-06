import { pathsToModuleNameMapper } from 'ts-jest';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const moduleNameMapper = pathsToModuleNameMapper(
  { '@/*': ['src/*'] }, // Change this to point to your src folder
  {
    prefix: '<rootDir>/',
  }
);
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: join(__dirname, 'tsconfig.app.json'), // Specify the tsconfig file if needed
      },
    ],
  },
  moduleNameMapper
}