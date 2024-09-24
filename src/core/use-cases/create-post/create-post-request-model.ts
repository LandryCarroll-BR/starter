import { ValidationError } from '@/core/errors/validation-error'
import { z } from 'zod'

const CreatePostRequestModelSchema = z.object({
  name: z.string(),
  description: z.string(),
})

export type CreatePostRequestModel = z.infer<typeof CreatePostRequestModelSchema>

export class CreatePostRequest {
  constructor(public request: CreatePostRequestModel) {
    try {
      const validatedData = CreatePostRequestModelSchema.parse(request)
      this.request = validatedData
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new ValidationError(error.errors[0].message)
      }
    }
  }

  toPlainObject() {
    return this.request
  }
}
