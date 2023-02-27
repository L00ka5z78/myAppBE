import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { Todo } from "../models/Todo.js";

export const register = async (req, res) => {
    const { name, email, password, age } = req.body

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ message: "User already exists..." })
        }
        // hash the password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create new user and insert in database

        user = newUser({
            name, email, age, password: hashedPassword,
        })
        await user.save();

        const payload = {
            user: user._id,
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 })
        res.cookie("token", token, {
            httpOnly: true,
            expiresIn: 360000
        })
        const { password: pass, ...rest } = user._doc;
        res.status(201).json({ message: "User created successfully", user: rest })

    } catch (error) {
        console.error(error.message);
        res
            .status(500)
            .json({ error: "Internal server error..." })
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        // check if user exists

        if (!user) {
            return res
                .status(404)
                .json({ message: "User not found..." })
        }
        // compare password with users hashed password

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials..." })
        }
        const payload = {
            user: user._id,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 })
        res.cookie("token", token, {
            httpOnly: true,
            expiresIn: 360000
        })
        const { password: pass, ...rest } = user._doc;
        res.status(200).json({ message: "User logged in successfully", user: rest })



    } catch (error) {
        console.error(error.message);
        res
            .status(500)
            .json({ error: "Internal server error..." })
    }
};

export const logout = async (req, res) => { };

export const getMe = async (req, res) => { };

export const updateDetails = async (req, res) => { };

export const updatePassword = async (req, res) => { };

export const deleteUser = async (req, res) => { };