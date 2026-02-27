import { cache } from 'react';
import { postRepository } from '@/repositories/json-post-repository';

export const findAllPublicPost = cache(
  async () => await postRepository.findAllPublic(),
);
