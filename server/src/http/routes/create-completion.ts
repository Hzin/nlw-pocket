import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z, { string } from 'zod'
import { createGoalCompletion } from '../../functions/create-goal-completion'

export const createCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalId: string(),
        }),
      },
    },
    async request => {
      const { goalId } = request.body

      await createGoalCompletion({ goalId })
    }
  )
}
