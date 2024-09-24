import { ValidationError } from '@/core/errors/validation-error'
import { z } from 'zod'

const CreatePostResponseModelSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  rateId: z.string(),
})

export type CreatePostResponseModel = z.infer<typeof CreatePostResponseModelSchema>

export class CreatePostResponse {
  constructor(
    public success: boolean,
    public message: string,
    public rateId: string
  ) {
    try {
      const validatedData = CreatePostResponseModelSchema.parse({ success, message, rateId })
      this.success = validatedData.success
      this.message = validatedData.message
      this.rateId = validatedData.rateId
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new ValidationError(error.errors[0].message)
      }
    }
  }

  toPlainObject(): CreatePostResponseModel {
    return {
      success: this.success,
      message: this.message,
      rateId: this.rateId,
    }
  }
}
