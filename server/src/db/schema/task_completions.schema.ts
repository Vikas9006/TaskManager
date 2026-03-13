import { pgTable, uuid, varchar, timestamp, boolean, serial, integer, date } from "drizzle-orm/pg-core";
import { tasks } from "./tasks.schema";

export const taskCompletions = pgTable("task_completions", {
  id: serial('id').primaryKey(),
  taskId: integer('task_id').notNull().references(() => tasks.id),
  date: date("date").notNull(),
  completedAt: date('completed_at').defaultNow(),
});
