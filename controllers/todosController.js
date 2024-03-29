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
        res.status(200).json({ message: "Task found!", todo })


    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" })
        // res.status(500).send({ error: "Internal server error" })

    }
}

export const createTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        const todo = await Todo.create({
            title, description, completed: false, user: req.user
        })
        res.status(201).json({ message: "Task created successfully!", todo })

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal server error" })
    }
}

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body
    try {
        const todo = await Todo.findById(id)
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" })
        }
        if (todo.user.toString() !== req.user) {
            return res.status(401).json({ message: "Not authorized" })
        }
        todo.title = title;
        todo.description = description;
        todo.completed = completed;
        await todo.save();
        res.status(200).json({ message: "Todo updated successfully" })

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal server error" })
    }

}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id)
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" })
        }
        if (todo.user.toString() !== req.user) {
            return res.status(401).json({ message: "Not authorized" })
        }
        await todo.remove();
        return res.status(200).json({ message: "Todo deleted successfully" })
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal server error" })
    }
}