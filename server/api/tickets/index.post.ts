import { useDrizzle, TicketInsert } from "~/server/utils/drizzle";

export default defineEventHandler(async (event) => {
  try {
    const ticket = await readBody<Pick<TicketInsert, 'username' | 'name' | 'avatar'>>(event);
    const result = await useDrizzle().insert(tables.tickets).values({
      ...ticket,
      createdAt: new Date(),
    }).returning().get();
    return { newUser: result }
  } catch (e: any) {
    throw createError({ statusCode: 500, statusMessage: e.message });
  }
});
