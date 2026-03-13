import { cache } from 'react';
import { notFound } from 'next/navigation';
import { postRepository } from '@/repositories';

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);
