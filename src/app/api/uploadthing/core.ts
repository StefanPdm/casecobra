import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { z } from 'zod'; // schema validation library

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '8MB' } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // metadata will return from middleware,
      //so you need to pass it through middleware as well to get the configId
      console.log('Metadata:', metadata);
      const { configId } = metadata.input;
      return { configId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
