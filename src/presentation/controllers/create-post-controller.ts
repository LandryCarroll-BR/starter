'use server'

import { CreatePostUseCase } from '@/core/use-cases/create-post/create-post'
import { CreatePostRequest, CreatePostRequestModel } from '@/core/use-cases/create-post/create-post-request-model'
import { NextAuthRepository } from '@/infrastructure/persistance/repositories/next-auth-repository'
import { PrismaPostRepository } from '@/infrastructure/persistance/repositories/prisma-post-repository'
import { CreatePostPresenter } from '@/presentation/presenters/create-post-presenter'

export async function createPostController(payload: CreatePostRequestModel): Promise<CreatePostPresenter> {
  const authRepository = new NextAuthRepository()
  const postRepository = new PrismaPostRepository()
  const createPostUseCase = new CreatePostUseCase(postRepository, authRepository)

  const request = new CreatePostRequest(payload).toPlainObject()
  const response = await createPostUseCase.execute(request)

  return CreatePostPresenter.present(response)
}
