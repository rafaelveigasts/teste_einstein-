export const apiKeyAuthSchema = {
  in: 'headers',
  name: 'Authorization',
  description: 'Token de Acesso (login)',
  required: true,
  example: 'Bearer token'
}

export const authBetweenApisSchema = {
  in: 'headers',
  name: 'Authorization',
  description: 'Token de comunicação entre APIs',
  required: true
}

export const apiKeyResetPasswordAuthSchema = {
  in: 'headers',
  name: 'Authorization',
  description: 'Token de Reset de Senha',
  required: true
}
