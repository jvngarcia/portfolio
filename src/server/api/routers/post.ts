// import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
//   protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),

  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.example.findMany();
  // }),

  getAllPublished: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
        where: {
            published: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
        select:{
            title: true,
            extract: true,
            published: true,
            createdAt: true,           
        }
    });
  }),

//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
});
