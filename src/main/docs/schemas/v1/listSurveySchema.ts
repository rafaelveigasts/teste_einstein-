export const listSurveySchema = {
  type: 'object',
  properties: {
    target_audience: { type: 'string', example: 'geeks' },
    direction: { type: 'string', example: 'asc' }
  }
}

export const listSurveyResponse = {
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
