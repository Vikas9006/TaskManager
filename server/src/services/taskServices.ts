import { newTask } from "../constants";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../db/queries/tasks.queries";

export const createTaskService = async (title: string, description: string | undefined, completed: boolean | undefined) => {
  description = description || "";
  completed = completed || false;
  const newTask = await createTask({ title, description, completed });
  return newTask;
};

export const getTasksService = async () => {
  const tasks = await getTasks();
  return tasks;
}

export const deleteTaskService = async (id: string) => {
  await deleteTask(id);
};

export const updateTaskService = async (id: string, task: Partial<newTask>) => {
  if (task.id !== id) {
    console.log('Server error');
    return null;
  }
  const updatedTask = await updateTask(id, task);
  return updatedTask;
};
