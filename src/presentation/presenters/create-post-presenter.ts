import { CreatePostResponseModel } from '@/core/use-cases/create-post/create-post-response-model'

export class CreatePostPresenter {
  static present(responseModel: CreatePostResponseModel) {
    return {
      success: responseModel.success,
      message: responseModel.message,
      rateId: responseModel.rateId,
    }
  }
}
