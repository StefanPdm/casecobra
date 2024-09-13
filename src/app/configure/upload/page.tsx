'use client';

import { cn } from '@/lib/utils';
import { Loader2, MousePointerSquareDashed, Image as PlaceholderImage } from 'lucide-react';
import { useState, useTransition } from 'react';
import Dropzone, { FileRejection } from 'react-dropzone';
import { Progress } from '@/components/ui/progress';

interface pageProps {}

export default function Page() {
  const isUploading = false;
  const [isPending, startTransition] = useTransition();
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const onDropRejected = () => {};
  const onDropAccepted = (acceptedFiles: File[]) => {
    console.log('Files accepted:', acceptedFiles);
    // setIsDragOver(false);
  };

  return (
    <div
      className={cn(
        'relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center',
        {
          'ring-blue-900/45 bg-blue-900/10': isDragOver,
        }
      )}>
      <div className='relative flex flex-1 flex-col items-center justify-center w-full cursor-pointer'>
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
            'image/webp': ['.webp'],
            'image/tiff': ['.tiff'],
          }}
          onDragEnter={() => {
            console.log('drag enter');
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}>
          {({ getRootProps, getInputProps }) => (
            <div
              className='h-full w-full flex-1 flex flex-col items-center
           justify-center
           '
              {...getRootProps()}>
              <input {...getInputProps()} />

              {isDragOver ? (
                <MousePointerSquareDashed className='h-6 w-6 text-zinc-500 my-2' />
              ) : isUploading || isPending ? (
                <div className='animate-spin flex justify-center items-center my-2 relative p-4'>
                  <Loader2 className='animate-ping h-5 w-5 text-green-600 absolute' />
                  <Loader2 className='h-6 w-6 text-green-600 absolute' />
                </div>
              ) : (
                <PlaceholderImage className='h-6 w-6 text-zinc-500 my-2' />
              )}
              <div className='flex flex-col justify-center mb-2 text-zinc-700'>
                {isUploading ? (
                  <div className='flex flex-col items-center'>
                    <p>Uploading ...</p>
                    <Progress
                      className='mt-2 w-40 h-2 bg-gray-300'
                      value={uploadProgress}
                    />
                  </div>
                ) : isPending ? (
                  <div className='flex flex-col items-center'>
                    <p>Redirecting, please wait ...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className='font-semibold'>Drop here </span>to upload.
                  </p>
                ) : (
                  <p>
                    <span className='font-semibold'>Drag and drop </span>or 'click' to upload.
                  </p>
                )}
              </div>
              {!isPending && (
                <p className='text-xs text-zinc-500'>
                  Limited to 5MB and PNG, JPG and JPEG formats only.
                </p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
}
