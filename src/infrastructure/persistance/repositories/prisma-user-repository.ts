import { User } from '@/core/entities/user'
import { DataAccessError } from '@/core/errors/data-access-error'
import { UserGateway } from '@/core/gateways/user-gateway'
import prisma from '@/infrastructure/persistance/prisma/client'

export class PrismaUserRepository implements UserGateway {
  async getUser(userId: string): Promise<User> {
    try {
      if (!userId) {
        throw new Error('User not found')
      }

      const user = await prisma.user.findUnique({
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
        where: {
          id: userId,
        },
      })

      if (!user) throw new Error('User not found')

      return new User(user.id, user.email)
    } catch (error) {
      throw new DataAccessError('Error getting user')
    }
  }
}
