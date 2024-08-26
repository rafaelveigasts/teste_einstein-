import { adaptRoute } from '@/main/adapter/express-adapter-route'
import { Router } from 'express'
import { container } from 'tsyringe'
import { CreateSurveyController } from '../controllers/CreateSurveyController'
import { CreateSurveyDTO } from '../controllers/dto/CreateSurveyDTO'
import { ListSurveyDTO } from '../controllers/dto/ListSurveyDTO'
import { ExportSurveyController } from '../controllers/ExportSurveyController'
import { ListSurveyController } from '../controllers/ListSurveyController'
import { UpdateSurveyController } from '../controllers/UpdateSurveyController'
import { MiddlewareUtils } from '../middlewares/MiddlewareUtils'
import validateDTO from './validation'
import { UpdateSurveyDTO } from '../controllers/dto/UpdateSurveyDTO'

const createSurveyController = container.resolve(CreateSurveyController)
const updateSurveyController = container.resolve(UpdateSurveyController)
const listSurveyController = container.resolve(ListSurveyController)
const exportSurveyController = container.resolve(ExportSurveyController)

export default (router: Router): void => {
  router.post(
    '/survey',
    validateDTO(CreateSurveyDTO),
    adaptRoute(createSurveyController)
  )

  router.put('/survey', 
    validateDTO(UpdateSurveyDTO),
    adaptRoute(updateSurveyController))

  router.get(
    '/survey',
    MiddlewareUtils.requestValidation({
      body: ListSurveyDTO
    }),
    adaptRoute(listSurveyController)
  )

  router.get('/export', adaptRoute(exportSurveyController))
}
