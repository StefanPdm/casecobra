import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

export default function UploadLayout({ children }: layoutProps) {
  return <MaxWidthWrapper className='flex flex-1 flex-col'>{children}</MaxWidthWrapper>;
}
