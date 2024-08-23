import { NextFunction, Request, Response } from 'express'

export async function setHeaders(_: Request, res: Response, next: NextFunction) {
  res.setHeader('Access-Control-Expose-Headers', 'page, totalitems, totalpages')
  next()
}
