import { EnvironmentConfiguration } from 'src/app/models/environment-configuration';

export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: false,
  apiKey: '${API_KEY}',
  apiUrl: 'http://localhost:8000/',
};
