import 'reflect-metadata';
import './shared/infra/containers'


export const startApp = async () => {
  const app = (await import('./config/app')).default
  return app
}