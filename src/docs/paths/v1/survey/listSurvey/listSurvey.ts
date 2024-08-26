export const listSurvey = {
  get: {
    tags: ['Portal Paciente V3 - Profile'],
    summary: 'API para buscar endereços do paciente',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },

    security: [
      {
        bearerAuth: [] as any
      }
    ],
    parameters: [
      {
        $ref: '#/schemas/apiKeyAuthSchema'
      },

      {
        $ref: '#/schemas/headerSubdomainSchema'
      }
    ],

    responses: {
      200: {
        description: 'Ok',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/profileAdressesV3Response'
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
