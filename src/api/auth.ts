import client from './client'

export interface LoginParams {
  email: string
  password: string
}

export interface RegisterParams {
  email: string
  password: string
  confirm_password?: string
}

export interface AuthResponse {
  token: string
  user: {
    id: number
    email: string
    display_name?: string
    quota: number
  }
}

export const login = async (params: LoginParams): Promise<AuthResponse> => {
  const response = await client.post('/api/user/login', params)
  return response.data
}

export const register = async (params: RegisterParams): Promise<AuthResponse> => {
  const response = await client.post('/api/user/register', params)
  return response.data
}

export const getUserInfo = async () => {
  const response = await client.get('/api/user')
  return response.data
}
