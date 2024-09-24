'use server'

import { NextAuthRepository } from '@/infrastructure/persistance/repositories/next-auth-repository'

export async function signOutAction() {
  const authRepository = new NextAuthRepository()
  return await authRepository.signOut()
}
