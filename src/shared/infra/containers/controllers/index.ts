import { container } from "tsyringe";
import { Controller } from "@shared/infra/helpers/protocols";
import { CreateSurveyController } from "@modules/survey/controllers/CreateSurveyController";
import { UpdateSurveyController } from "@modules/survey/controllers/UpdateSurveyController";
import { ListSurveyController } from "@modules/survey/controllers/ListSurveyController";
import { ExportSurveyController } from "@modules/survey/controllers/ExportSurveyController";

container.registerSingleton<Controller>('ICreateSurveyController', CreateSurveyController);
container.registerSingleton<Controller>('IUpdateSurveyController', UpdateSurveyController);
container.registerSingleton<Controller>('IListSurveyController', ListSurveyController);
container.registerSingleton<Controller>('IExportSurveyController', ExportSurveyController);