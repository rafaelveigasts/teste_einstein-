import 'reflect-metadata';
import './shared/infra/containers'

import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { surveyRouter } from '@shared/infra/server/routes/survey.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.all('/', (_request: Request, response: Response) =>
  response.redirect('/docs')
);


app.use('/hello', (_request: Request, response: Response) => {
  return response.json({ message: 'Hello World' });
});
app.use('/survey', surveyRouter);



export { app };
