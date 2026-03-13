import { InferSelectModel, InferInsertModel } from "drizzle-orm";

import { tasks } from "../db/schema/tasks.schema";

export type Task = InferSelectModel<typeof tasks>;
export type newTask = InferInsertModel<typeof tasks>;
