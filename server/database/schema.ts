import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tickets = sqliteTable("tickets", {
  id: integer("id").primaryKey(),
  createdAt: integer("created_at", {mode: 'timestamp'}).notNull(),
  name: text("name").notNull(),
  username: text("username").notNull().unique(),
  avatar: text("avatar").notNull(),
});

