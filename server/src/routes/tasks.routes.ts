import { Router } from "express";

import { createTaskController, deleteTaskController, getTasksController, updateTaskController } from "../controllers/taskController";

const router = Router();

router.post('/', createTaskController);

router.get('/', getTasksController);

router.delete('/:id', deleteTaskController);

router.put('/:id', updateTaskController);

export default router;
