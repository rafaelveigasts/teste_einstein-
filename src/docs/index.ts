import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.1',



  info: {
    title: 'API para pesquisas',
    description: 'Teste desenvolvedor backend Einstein',
    version: '1.0.0'
  },
  externalDocs: {
    description: 'Link para o contato',
    url: 'https://www.linkedin.com/in/rafaelveigasts/'
  },
  servers: [
    {
      url: '/teste-einstein',
      description: 'Servidor Principal'
    }
  ],

  paths,
  schemas
}

export const options = {
  customSiteTitle: `API para pesquisas`,
  showExplorer: true
}
