import { z } from "zod";
import { procedure, router } from "./trpc";
import { userRouter } from "./routers/user";

export const appRouter = router({
    userRoutes : userRouter
})

export type AppRouter = typeof appRouter;