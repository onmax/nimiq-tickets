import { tickets, InsertTicket } from "@/server/database/schema";
import { db } from "@/server/sqlite-service";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const newTicket: InsertTicket = {
      ...body
    }
    const result = db.insert(tickets).values(newTicket).run();
    return { newUser : result}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
