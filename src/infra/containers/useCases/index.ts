import { CreateSurveyUseCase } from '@/application/useCases/CreateSurveyUseCase'
import { ICreateSurveyUseCase } from '@/application/useCases/interfaces/ICreateSurveyUseCase'
import { IListSurveyUseCase } from '@/application/useCases/interfaces/IListSurveyUseCase'
import { IUpdateSurveyUseCase } from '@/application/useCases/interfaces/IUpdateSurveyUseCase'
import { ListSurveyUseCase } from '@/application/useCases/ListSurveyUseCase'
import { UpdateSurveyUseCase } from '@/application/useCases/UpdateSurveyUseCase'
import { container } from 'tsyringe'

container.registerSingleton<ICreateSurveyUseCase>(
  'ICreateSurveyUseCase',
  CreateSurveyUseCase
)

container.registerSingleton<IUpdateSurveyUseCase>(
  'IUpdateSurveyUseCase',
  UpdateSurveyUseCase
)

container.registerSingleton<IListSurveyUseCase>('IListSurveyUseCase', ListSurveyUseCase)
