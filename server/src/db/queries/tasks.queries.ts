import { eq } from "drizzle-orm";

import { db } from "../../config/database";
import { tasks } from "../schema/tasks.schema";
import { newTask } from "../../constants";

export const createTask = async (data: {
  title: string;
  description: string;
  completed: boolean;
}) => {
  return db.insert(tasks).values(data).returning();
};

export const getTasks = async () => {
  return db.select().from(tasks);
};

export const getTaskById = async (id: string) => {
  return db.select().from(tasks).where(eq(tasks.id, id));
};

export const deleteTask = async (id: string) => {
  return db.delete(tasks).where(eq(tasks.id, id));
};

export const updateTask = async (id: string, task: Partial<newTask>) => {
  return db.update(tasks).set(task).where(eq(tasks.id, id));
};
