import { healthCheck } from './paths/'
import { v1SwaggerRoutes } from './routes/v1.routes'

export default {
  '/health/readiness': healthCheck,
  '/health/liveness': healthCheck,
  '/health/': healthCheck,
  ...v1SwaggerRoutes,
}
