import { Todo } from "../models/Todo.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user })
        res.status(200).json({ message: "Task found!", todos })
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal server error" })
    }
}

export const getTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id);
        if (!todo) {
            res.status(404).json({ message: "Todo not found" })
        }
        if (todo.user.toString() !== req.user) {
            res.status(401).json({ message: "Not authorized" })
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" })
        // res.status(500).send({ error: "Internal server error" })

    }
}

export const createTodo = async (req, res) => { }

export const updateTodo = async (req, res) => { }

export const deleteTodo = async (req, res) => { }