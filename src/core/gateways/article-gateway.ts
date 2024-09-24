import { Article } from '@/core/entities/article'

export interface ArticleGateway {
  getArticleBySlug(slug: string): Promise<Article | null>
  getArticles(): Promise<Article[]>
}
