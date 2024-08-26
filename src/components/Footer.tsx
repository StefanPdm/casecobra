import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

export default function Footer() {
  return (
    <footer className='bg-white relative border-t border-gray-200 '>
      <MaxWidthWrapper>
        <div
          className='h-full flex flex-col md:flex-row
        md:justify-between justify-center items-center py-6
        '>
          <div className='text-center md:texr-left pb-2 md:pb-0'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()}{' '}
              <span className='font-bold'>
                case<span className='text-green-600'>cobra</span>
              </span>
              . All rights reserved.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
