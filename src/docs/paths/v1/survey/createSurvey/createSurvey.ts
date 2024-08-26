export const createSurvey = {
  put: {
    tags: ['Portal Paciente V3 - Profile'],
    summary: 'API para criar/atualizar endereço do paciente',
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
      },
      {
        in: 'query',
        name: 'id',
        required: false,
        description: 'ID do endereço a ser atualizado, para endereço novo não informar'
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/upsertAdressV3Schema'
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
  },

  delete: {
    tags: ['Portal Paciente V3 - Profile'],
    summary: 'API para deleta um endereço do paciente',
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
      },
      {
        in: 'path',
        name: 'id',
        required: true,
        description: 'ID do endereço a ser deletado'
      }
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
