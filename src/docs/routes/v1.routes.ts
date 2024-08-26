import {
  healthCheck,
  createSurvey,
  listSurvey,
  updateSurvey  
} from '../paths/'

export const v1SwaggerRoutes = {
  '/health': healthCheck,
  '/survey': {
    ...listSurvey,
    ...createSurvey,
    ...updateSurvey
  }
}
