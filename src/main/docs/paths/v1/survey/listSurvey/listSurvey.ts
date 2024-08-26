export const listSurvey = {
  get: {
    tags: ['Survey'],
    summary: 'API para buscar pesquisa',

    parameters: [
      {
        in: 'body',
        name: 'direction',
        required: false,
        example: 'asc | desc'
      },
      {
        in: 'body',
        name: 'target_audience',
        required: false,
        example: 'geeks'
      }
    ],

    responses: {
      200: {
        description: 'Ok',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/listSurveyResponse'
            }
          }
        }
      },

      400: {
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
      },
      401: {
        description: 'Credenciais inválidas',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      },
      403: {
        description: 'Credenciais inválidas',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      },
      404: {
        description: 'API não encontrada'
      },
      500: {
        description: 'Erro interno no servidor',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                error: {
                  type: 'string',
                  example: 'Error'
                }
              }
            }
          }
        }
      }
    }
  }
}
