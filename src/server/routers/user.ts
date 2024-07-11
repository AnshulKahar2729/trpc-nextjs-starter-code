import { z } from "zod";
import { procedure, router } from "../trpc";

export const userRouter = router({
    getUsers : procedure.query(() => {
        return [{name: 'John', race : "indian"}, {name: 'Doe', race : "white"}]
    }),
    addUsers : procedure.input(z.object({
        name: z.string(),
        race: z.string()
    })).mutation((opts) => {
        const {input} = opts;
        // TODO : CALL PRISMA ADD USER
    })
})

export type AppRouter = typeof userRouter;