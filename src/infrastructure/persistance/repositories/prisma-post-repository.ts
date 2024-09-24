import { Post } from '@/core/entities/post'
import { Session } from '@/core/entities/session'
import { DataAccessError } from '@/core/errors/data-access-error'
import { PostGateway } from '@/core/gateways/post-gateway'
import { CreatePostPayload } from '@/core/types/create-post-data'
import prisma from '@/infrastructure/persistance/prisma/client'

export class PrismaPostRepository implements PostGateway {
  async createPost(payload: CreatePostPayload, session: Session): Promise<Post> {
    try {
      const prismaRate = await prisma.post.create({
        data: {
          name: payload.name,
          description: payload.description,
          updatedBy: session.userId,
        },
      })

      return new Post(
        prismaRate.id,
        prismaRate.name,
        prismaRate.description,
        prismaRate.updatedAt,
        prismaRate.createdAt
      )
    } catch (error) {
      throw new DataAccessError('Error creating rate')
    }
  }
}
