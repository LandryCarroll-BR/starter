import { User } from '@/core/entities/user'

export interface UserGateway {
  getUser(userId: string): Promise<User>
}
