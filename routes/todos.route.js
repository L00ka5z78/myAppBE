import express from 'express';
import { authorize } from '../controllers/middleware/authorize.js'
import { createTaskRequirements, updateTaskRequirements } from '../controllers/middleware/validate.js';
import { validateResult } from '../controllers/middleware/validationResults.js';
import { getTodo, getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todosController.js'

const router = express.Router();

// crud operations

router.get("/:id", authorize, getTodo);
router.get("/", authorize, getTodos);

router.post("/create", authorize, createTaskRequirements, validateResult, createTodo);
router.put("/update/:id", authorize, updateTaskRequirements, validateResult, updateTodo);

router.delete("/delete/:id", authorize, deleteTodo);

export default router