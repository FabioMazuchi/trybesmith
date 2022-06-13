export interface Product {
  id?: number
  name: string
  amount: string
  orederId?: number
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

export interface UserLogin {
  username: string
  password: string
}

export interface UserToken {
  id?: number
  username?: string
}

export interface JwtConfig {
  expiresIn: string
  algorithm: string
}

export interface Prod {
  id: number
  userId: number
  productsIds: number[]
}

export interface MyJwt {
  data: UserToken
}

export interface Order {
  userId?: number
  productsIds: number[]
}
