export interface User {
  id: string
  name: string
  email: string
}

export interface AuthState {
  user: User | null
  isLoading: boolean
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}