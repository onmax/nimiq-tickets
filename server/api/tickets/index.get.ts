import { tickets } from "@/server/database/schema";
import { eq } from "drizzle-orm";
import { useDrizzle } from "~/server/utils/drizzle";

export default defineEventHandler(async (event) => {
  const { username } = getQuery<{username:string}>(event)

  if(typeof username !== 'string') {
    return createError(`username must be a string`)
  }

  try {
    const ticket = await useDrizzle().select().from(tickets).where(eq(tickets.username, username)).get();
    if(!ticket) {
      return createError({ statusCode: 404, statusMessage: `Ticket not found` })
    }
    return { ticket }

  } catch (e: any) {
    throw createError({ statusCode: 500, statusMessage: e.message });
  }
});
