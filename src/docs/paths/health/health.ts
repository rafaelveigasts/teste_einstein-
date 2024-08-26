export const healthCheck = {
  get: {
    tags: ['Health Check'],
    summary: 'Verifica se a aplicação está ok',

    responses: {
      200: {
        description: 'OK'
      },
      500: {
        description: 'Erro Servidor interno'
      }
    }
  }
}
