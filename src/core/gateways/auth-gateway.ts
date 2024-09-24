import { Session } from '@/core/entities/session'

export interface AuthGateway {
  signIn(): Promise<void>
  signOut(): Promise<void>
  getSession(): Promise<Session | null>
}
