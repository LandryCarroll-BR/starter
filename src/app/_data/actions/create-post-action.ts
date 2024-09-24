'use server'

import { ActionState } from '@/app/_lib/types/action-state'
import { DataAccessError } from '@/core/errors/data-access-error'
import { UnauthenticatedError } from '@/core/errors/unauthenticated-error'
import { ValidationError } from '@/core/errors/validation-error'
import { createPostController } from '@/presentation/controllers/create-post-controller'
import { CreatePostPresenter } from '@/presentation/presenters/create-post-presenter'

type CreatePostActionState = ActionState<CreatePostPresenter>

export async function createPostAction(formData: FormData): Promise<CreatePostActionState> {
  try {
    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const payload = { name, description }

    return await createPostController(payload)
  } catch (error) {
    if (error instanceof UnauthenticatedError) {
      return { error: 'You must be logged in to create a rate.' }
    }

    if (error instanceof ValidationError) {
      return { error: error.message }
    }

    if (error instanceof DataAccessError) {
      return { error: 'There was an issue saving the rate. Please try again.' }
    }

    throw error
  }
}

export type CreatePostAction = typeof createPostAction
