import { tickets } from "@/server/database/schema";
import { db } from "@/server/sqlite-service";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { username } = getQuery<{username:string}>(event)

  if(typeof username !== 'string') {
    return createError(`username must be a string`)
  }

  try {
    const ticket = db.select().from(tickets).where(eq(tickets.username, username)).get();
    if(!ticket) {
      return createError({ statusCode: 404, statusMessage: `Ticket not found` })
    }
    return { ticket }

  } catch (e: any) {
    throw createError({ statusCode: 500, statusMessage: e.message });
  }
});
