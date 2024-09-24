'use server'

import { NextAuthRepository } from '@/infrastructure/persistance/repositories/next-auth-repository'

export async function signInAction() {
  const authRepository = new NextAuthRepository()
  return await authRepository.signIn()
}
