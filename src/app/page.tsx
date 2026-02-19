import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

export default function HomePage() {
  return (
    <div>
      <SpinLoader containerClasses='min-h-40' />
    </div>
  );
}
