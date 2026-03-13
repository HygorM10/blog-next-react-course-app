import { and, desc } from 'drizzle-orm';

import type { PostModel } from '@/models/post/post-model';
import type { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
      where: (post, { eq }) => eq(post.published, true),
    });
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (post, { eq }) =>
        and(eq(post.slug, slug), eq(post.published, true)),
    });

    if (!post) throw new Error(`Post with slug ${slug} not found`);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (post, { eq }) => eq(post.id, id),
    });

    if (!post) throw new Error(`Post with id ${id} not found`);

    return post;
  }
}
