import { AuthGateway } from '@/core/gateways/auth-gateway'
import { Session } from '@/core/entities/session'
import { cookies } from 'next/headers'
import prisma from '@/infrastructure/persistance/prisma/client'
import { AuthenticationError } from '@/core/errors/authentication-error'
import { signIn, signOut } from '@/infrastructure/persistance/session/auth'

export class NextAuthRepository implements AuthGateway {
  signIn(): Promise<void> {
    try {
      return signIn()
    } catch (error) {
      throw new AuthenticationError('Error signing in')
    }
  }

  signOut(): Promise<void> {
    try {
      return signOut()
    } catch (error) {
      throw new AuthenticationError('Error signing out')
    }
  }

  async getSession(): Promise<Session | null> {
    try {
      const sessionToken = cookies().get('authjs.session-token')?.value

      const session = await prisma.session.findUnique({
        where: {
          sessionToken,
        },
      })

      if (!session) {
        return null
      }

      return new Session(session.id, session.sessionToken, session.userId, session.expires)
    } catch (error) {
      throw new AuthenticationError('Error geting session')
    }
  }
}
