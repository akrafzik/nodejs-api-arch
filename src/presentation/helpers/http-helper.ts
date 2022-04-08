import { httpResponse } from '../protocols/http'
export const badRequest = (error: Error): httpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (body: any): httpResponse => ({
  statusCode: 200,
  body
})
