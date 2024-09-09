Teste Desenvolvedor backend

1. instale as dependências
   1. **npm i | yarn**
2. suba o banco de dados
   1. **docker compose up**
3. rode as migrations
   1. **npx prisma migrate dev**
4. rode os testes
   1. **npm run test**

A estrutura modularizada ajuda a manter o código organizado e facilita a manutenção e escalabilidade do projeto. Cada módulo é responsável por uma parte específica da aplicação, e o uso de pastas como `controllers`, `repositories`, `useCases`, `entities` e `dtos` dentro de cada módulo ajuda a separar claramente as responsabilidades.

src/
├── application/
│   ├── controllers/
│   │   ├── CreateSurveyController.ts
│   │   ├── ExportSurveyController.ts
│   │   ├── ListSurveyController.ts
│   │   ├── UpdateSurveyController.ts
│   │   └── dto/
│   │       ├── CreateSurveyDTO.ts
│   │       ├── ListSurveyDTO.ts
│   │       └── UpdateSurveyDTO.ts
│   ├── helpers/
│   │   ├── httpHelper.ts
│   │   ├── index.ts
│   │   ├── payloadError.ts
│   │   └── serverError.ts
│   ├── middlewares/
│   │   ├── index.ts
│   │   ├── MiddlewareUtils.ts
│   │   └── requestValidation.ts
│   ├── protocols/
│   │   ├── controller.ts
│   │   ├── http.ts
│   │   ├── index.ts
│   │   └── middleware.ts
│   ├── repository/
│   │   ├── index.ts
│   │   └── SurveyRepository.ts
│   ├── routes/
│   │   ├── survey.routes.ts
│   │   └── validation.ts
│   └── useCases/
│       ├── CreateSurveyUseCase.ts
│       ├── ListSurveyUseCase.ts
│       ├── UpdateSurveyUseCase.ts
│       └── interfaces/
│           ├── ICreateSurveyUseCase.ts
│           ├── IListSurveyUseCase.ts
│           └── IUpdateSurveyUseCase.ts
├── config/
│   ├── application.ts
│   ├── app.ts
│   ├── handlers.ts
│   ├── httpsAgent.ts
│   ├── index.ts
│   ├── middlewares.ts
│   ├── routes.ts
│   ├── setHeaders.ts
│   ├── statusMonitor.ts
│   └── swagger.ts
├── infra/
│   ├── containers/
│   │   ├── controllers/
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── repositories/
│   │   │   └── index.ts
│   │   └── useCases/
│   │       └── index.ts
│   ├── database/
│   │   ├── prisma/
│   │   │   ├── prismaClient.ts
│   │   │   └── repositories/
│   │   │       └── prisma-survey-repository.ts
│   │   └── prisma/
│   └── http/
├── main/
│   ├── adapter/
│   │   └── express-adapter-route.ts
│   ├── docs/
│   │   ├── components/
│   │   │   ├── badRequest.ts
│   │   │   ├── emptyList.ts
│   │   │   ├── forbidden.ts
│   │   │   ├── index.ts
│   │   │   ├── notFound.ts
│   │   │   ├── serverError.ts
│   │   │   └── unauthorized.ts
│   │   ├── components.ts
│   │   ├── index.ts
│   │   ├── paths/
│   │   │   ├── index.ts
│   │   │   └── v1/
│   │   │       ├── index.ts
│   │   │       └── survey/
│   │   │           ├── createSurvey/
│   │   │           │   └── createSurvey.ts
│   │   │           ├── index.ts
│   │   │           ├── listSurvey/
│   │   │           │   └── listSurvey.ts
│   │   │           └── updateSurvey/
│   │   │               └── updateSurvey.ts
│   │   ├── paths.ts
│   │   ├── routes/
│   │   │   └── v1.routes.ts
│   │   ├── schemas/
│   │       ├── apiAuthSchema.ts
│   │       ├── errorSchema.ts
│   │       ├── headerSubdomain.ts
│   │       ├── index.ts
│   │       ├── ogirinSchema.ts
│   │       └── v1/
│   │           ├── createSurveySchema.ts
│   │           ├── index.ts
│   │           ├── listSurveySchema.ts
│   │           └── updateSurveySchema.ts
├── shared/
│   ├── axiosLogger/
│   │   └── AxiosLogger.ts
│   ├── enviroment/
│   │   └── dotenv.ts
│   ├── errors/
│   │   ├── dto/
│   │   │   ├── BadRequest.ts
│   │   │   ├── EHttpStatusCode.ts
│   │   │   ├── ErrorModel.ts
│   │   │   ├── Forbidden.ts
│   │   │   ├── InternalServerError.ts
│   │   │   ├── NotFound.ts
│   │   │   ├── Unauthorized.ts
│   │   │   └── UnsupportedMediaType.ts
│   │   └── errorHandler.ts
│   ├── logger/
│   │   ├── custom-colors.ts
│   │   ├── logger.ts
│   │   └── morganLogger.ts
│   └── objectTransferer/
│       └── objectTransferer.ts
├── tests/
│   └── survey.unit.spec.ts
├── utils/
│   └── module-alias.ts
├── app.ts
└── server.ts
