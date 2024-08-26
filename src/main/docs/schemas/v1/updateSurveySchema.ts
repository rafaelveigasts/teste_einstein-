export const updateSurveySchema = {
  type: 'object',
  properties: {
    id: { type: 'string', example: 'uuid' },
    email: { type: 'string', example: 'email@email.com' },
    star_quantity: { type: 'string', example: '2' }
  }
}

export const updateSurveyResponse = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    target_audience: { type: 'string' },
    star_quantity: { type: 'number' },
    email: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
}
