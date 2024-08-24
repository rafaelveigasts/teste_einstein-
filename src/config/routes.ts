import { Express, Router } from 'express'
import { join } from 'path'
import recursiveReaddir from 'recursive-readdir'

export default async (app: Express): Promise<void> => {
  const router = Router()
  app.use('/teste_einstein', router)

  recursiveReaddir(join(__dirname, '../shared/infra/server/routes'), async (err, files) => {
    if (err) {
      console.error('Erro ao ler arquivos:', err)
      return
    }

    for (const file of files) {
      if (!file.endsWith('.map')) {
        try {
          const routeModule = await import(`${file}`)
          if (typeof routeModule.default === 'function') {
            routeModule.default(router)
          } else {
            console.error(`O módulo em ${file} não exporta uma função padrão.`)
          }
        } catch (importErr) {
          console.error(`Erro ao importar o módulo ${file}:`, importErr)
        }
      }
    }
  })
}