import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingsGoals } from '../../functions/get-week-pendings-goals'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/pending-goals', async () => {
    const { pendingGoals } = await getWeekPendingsGoals()

    return pendingGoals
  })
}
