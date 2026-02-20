import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog do Hygor',
  description: 'Essa é a descrição do meu blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
}
