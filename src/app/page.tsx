import { Container } from '@/components/Container';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import clsx from 'clsx';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é o footer</h1>
      </footer>
    </Container>
  );
}
