import { tickets, InsertTicket } from "@/server/database/schema";
import { db } from "@/server/sqlite-service";

export default defineEventHandler(async (event) => {
  try {
    const ticket = await readBody<Pick<InsertTicket, 'username' | 'name' | 'avatar'>>(event);
    const result = db.insert(tickets).values(ticket).run();
    return { newUser: result }
  } catch (e: any) {
    throw createError({ statusCode: 500, statusMessage: e.message });
  }
});
