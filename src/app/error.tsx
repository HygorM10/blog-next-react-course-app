'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RouteErrorPage({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Ocorreu um erro inesperado ao qual nossa aplicação não conseguiu lidar. Tente novamente mais tarde.'
    />
  );
}
