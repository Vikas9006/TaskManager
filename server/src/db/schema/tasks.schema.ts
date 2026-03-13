import { pgTable, uuid, varchar, timestamp, boolean } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255}).notNull(),
  description: varchar("description", { length: 255 }),
  completed: boolean("completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});