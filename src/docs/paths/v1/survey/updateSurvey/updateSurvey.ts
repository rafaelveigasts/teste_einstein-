export const updateSurvey = {
  put: {
    tags: ['Survey'],
    summary: 'API para atualizar uma pesquisa',

    parameters: [
      {
        in: 'body',
        name: 'id',
        required: true,
        description: 'Id da pesquisa',
        example: 'uuid'
      },
      {
        in: 'body',
        name: 'email', 
        required: true,
        description: 'Email do usuário',
        example: 'a@b.c'
      },
      {
        in: 'body',
        name: 'star_quantity',
        required: true,
        description: 'Quantidade de estrelas',

      },
    ],

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
