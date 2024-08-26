import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}
export default function Phone({ className, imgSrc, dark = false, ...props }: PhoneProps) {
  return (
    <div
      className={cn('relative pointer-events-none z-50 overflow-hidden', className)}
      {...props}>
      <div className=''>
        <Image
          width={896}
          height={1831}
          src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'}
          alt='phone'
          className='pointer-events-none z-50 select-none w-full h-auto'
        />
      </div>

      <div className='absolute -z-10 inset-0'>
        <Image
          width={896}
          height={1831}
          src={imgSrc}
          alt='overlaying image'
          className='object-cover'
        />
      </div>
    </div>
  );
}
