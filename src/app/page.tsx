import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import clsx from 'clsx';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: '#',
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/bryen_9.png',
            alt: 'Alt da imagem',
            priority: true,
          }}
        />
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2026-02-23'
          >
            20/04/2026 10:00
          </time>

          <PostHeading as='h1' url='#'>
            Teste do Título
          </PostHeading>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            optio illo sequi animi pariatur asperiores molestiae nemo doloremque
            quas voluptatibus tempora eaque, quasi eum architecto id nam
            incidunt consequatur voluptates?
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é o footer</h1>
      </footer>
    </Container>
  );
}
