import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z, { number, string } from 'zod'
import { createGoal } from '../../functions/create-goal'

export const createGoalRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    {
      schema: {
        body: z.object({
          title: string(),
          desiredWeeklyFrequency: number().int().min(1).max(7),
        }),
      },
    },
    async request => {
      const { title, desiredWeeklyFrequency } = request.body

      const reponse = await createGoal({
        title: title,
        desiredWeeklyFrequency: desiredWeeklyFrequency,
      })

      return reponse
    }
  )
}
