import { Post } from '@/core/entities/post'
import { Session } from '@/core/entities/session'
import { CreatePostPayload } from '@/core/types/create-post-data'

export interface PostGateway {
  createPost(payload: CreatePostPayload, session: Session): Promise<Post>
}
