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

        user = new User({
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

export const logout = async (req, res) => {
    res
        .clearCookie("token")
        .status(200)
        .json({ message: "User logged out successfully" })

};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(404).json({ message: "User not found...", user: rest })
        }
        const { password: pass, ...rest } = user._doc;
        return res.status(200).json({ message: "User found...", user: rest })


    } catch (error) {
        console.error(error.message);
        res
            .status(500)
            .json({ error: "Internal server error..." })
    }
};

export const updateDetails = async (req, res) => {
    const { name, email, age } = req.body;
    try {
        // let user = await User.findById(req.user);
        const user = await User.findById(req.user);

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const userExists = await User.findOne({ email });
        if (userExists && userExists._id.toString() !== user._id.toString()) {
            return res.status(404).json({ message: "Email already taken" })
        }
        user.name = name;
        user.email = email;
        user.age = age;
        await user.save();

        const { password: pass, ...rest } = user._doc;
        res.status(200).json({ message: "User updated successfully", user: rest })

    } catch (error) {
        console.error(error.message);
        res
            .status(500)
            .json({ error: "Internal server error..." })
    }
};

export const updatePassword = async (req, res) => {
    const { password, newPassword } = req.body;
    try {
        let user = await User.findById(req.user)
        // const user = await User.findById(req.user);  //has to let because it throws error during updateing password :/
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        await user.save();

        const { password: pass, ...rest } = user._doc;
        return res.status(200).json({ message: "Password updated successfully", user: rest });



    } catch (error) {
        console.error(error.message);
        res
            .status(500)
            .json({ error: "Internal server error..." })
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.remove();
        res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" })
    }
};