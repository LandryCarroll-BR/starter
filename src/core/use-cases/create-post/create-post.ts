import { UnauthenticatedError } from '@/core/errors/unauthenticated-error'
import { AuthGateway } from '@/core/gateways/auth-gateway'
import { PostGateway } from '@/core/gateways/post-gateway'
import { CreatePostRequestModel } from '@/core/use-cases/create-post/create-post-request-model'
import { CreatePostResponse, CreatePostResponseModel } from '@/core/use-cases/create-post/create-post-response-model'

export class CreatePostUseCase {
  constructor(
    private postGateway: PostGateway,
    private authGatway: AuthGateway
  ) {}

  async execute(request: CreatePostRequestModel): Promise<CreatePostResponseModel> {
    const session = await this.authGatway.getSession()

    if (!session?.userId) {
      throw new UnauthenticatedError()
    }

    const rate = await this.postGateway.createPost(request, session)
    return new CreatePostResponse(true, 'Rate created', rate.id).toPlainObject()
  }
}
