'use client';

import ErrorMessage from '@/components/ErrorMessage';

export default function RouteErrorPage() {
  return (
    <ErrorMessage
      pageTitle='Slug'
      contentTitle='ERROR'
      content='Ocorreu um erro ao carregar a página. Por favor, tente novamente mais tarde.'
    />
  );
}
