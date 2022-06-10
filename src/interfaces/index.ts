export interface Product {
  id?: number
  name: string
  amount: string
  orederId?: number | null
}

export interface UserNotPassword {
  id?: number
  username: string
  classe: string
  level: number
}

export interface User extends UserNotPassword {
  password: string
}

export interface JwtConfig {
  expiresIn: string
  algorithm: string
}