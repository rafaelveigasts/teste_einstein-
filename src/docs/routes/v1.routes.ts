import {
  healthCheck,
  createSurvey,
  listSurvey,
  updateSurvey  
} from '../paths/'

export const v1SwaggerRoutes = {
  
  '/survey': {
    ...listSurvey,
    ...createSurvey,
    ...updateSurvey
  }
}
