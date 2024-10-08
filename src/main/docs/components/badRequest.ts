export const badRequest = {
  description: 'Requisição inválida',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          error: {
            type: 'string'
          },
          code: {
            required: false,
            type: 'string'
          }
        },
        required: ['error']
      }
    }
  }
}
