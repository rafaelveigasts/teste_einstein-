export const createSurvey = {
  post: {
    tags: ['Survey'],
    summary: 'API para criar uma pesquisa',

    parameters: [
      {
        in: 'body',
        name: 'target_audience',
        required: true,
        description: 'Público alvo da pesquisa'
      },
      {
        in: 'body',
        name: 'title',
        required: true,
        description: 'Título da pesquisa'
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createSurveyResponse'
          }
        }
      }
    },

    responses: {
      200: {
        description: 'Ok'
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
                  example: 'Protocol does not exist in scheduled agendamentos list'
                }
              }
            }
          }
        }
      }
    }
  }
}
