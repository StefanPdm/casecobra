import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Steps from '@/components/Steps';
import { ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

export default function UploadLayout({ children }: layoutProps) {
  return (
    <MaxWidthWrapper className='flex flex-1 flex-col'>
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
}
