export const createSurveySchema = {
  type: 'object',
  properties: {
    target_audience: { type: 'string' },
    title: { type: 'string' },
  }

}

export const createSurveyResponse = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    target_audience: { type: 'string' },
    star_quantity: { type: 'number' },
    email: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' },
  }
}
