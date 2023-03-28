import { EnvironmentConfiguration } from 'src/app/models/environment-configuration';

export const environment: EnvironmentConfiguration = {
  env_name: 'prod',
  production: true,
  // apiKey: '${API_KEY}',
  apiKey: '',
  apiUrl: 'http://localhost:8000/',
};
