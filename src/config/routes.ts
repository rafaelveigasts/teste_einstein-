import { Express, Router } from 'express'
import { join } from 'path'
import recursiveReaddir from 'recursive-readdir'

export default async (app: Express): Promise<void> => {
  const router = Router()
  app.use('/teste_einstein', router)

  recursiveReaddir(join(__dirname, '/../application/routes'), async (err, files) => {
    for (const file of files) {
      if (!file.endsWith('.map')) {
        ;(await import(`${file}`)).default(router)
      }
    }
  })
}
