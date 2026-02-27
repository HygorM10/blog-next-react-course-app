import './globals.css';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog do Hygor',
    template: '%s | Blog do Hygor',
  },
  description: 'Essa é a descrição do meu blog',
};

export default function RootLayout() {
  return (
    <html lang='pt-BR'>
      <body>
        <Container>
          <Header />
        </Container>
        <footer>
          <h1 className='text-6xl font-bold text-center py-8'>
            Aqui é o footer
          </h1>
        </footer>
      </body>
    </html>
  );
}
