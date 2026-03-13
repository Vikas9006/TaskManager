import { Request, Response } from "express";

import { createTaskService, deleteTaskService, getTasksService, updateTaskService } from "../services/taskServices";

export const createTaskController = async (req: Request, res: Response) => {
  try {
    const { title, description, completed } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTask = await createTaskService(title, description, completed);
    res.status(201).json({ message: "Task created successfully", newTask });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }

};

export const getTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getTasksService();
    res.status(200).json({ message: "Tasks fetched successfully", tasks });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  const taskId = req.params.id as string;
  await deleteTaskService(taskId);
  res.status(204).send();
};

export const updateTaskController = async (req: Request, res: Response) => {
  const taskId = req.params.id as string;
  const task = req.body;
  const updatedTask = await updateTaskService(taskId, task);
  if (!updatedTask) {
    return res.status(500).json({ message: "Server error" });
  }
  res.status(200).json({ message: "Task updated", task: updatedTask });
};
