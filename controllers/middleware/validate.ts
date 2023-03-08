import { check } from 'express-validator';

export const registerRequirements = [
    check("name", "MSG from validator: Name is required").notEmpty().trim().escape(),
    check("email", "MSG from validator: Insert email").notEmpty().isEmail().normalizeEmail(),
    check("password", "MSG from validator: Password has to be at least 6 characters long").isLength({ min: 6 }),
    check("age", "MSG from validator: Age is required").notEmpty().trim().escape().isNumeric()
];

export const loginRequirements = [
    check("email", "MSG from validator: Insert valid email").isEmail().normalizeEmail(),
    check("password", "MSG from validator: Password has to be at least 6 characters long").isLength({ min: 6 }),
];

export const updateDetailsRequirements = [
    check("name", "MSG from validator: Name is required").notEmpty().trim().escape(),
    check("email", "MSG from validator: Insert valid email").isEmail().normalizeEmail(),
    check("age", "MSG from validator: Age is required").notEmpty().trim().escape().isNumeric()
];
export const updatePasswordRequirements = [
    check("password", "MSG from validator: Password has to be at least 6 characters long").isLength({ min: 6 }),
    check("newPassword", "MSG from validator: Password has to be at least 6 characters long").isLength({ min: 6 }),
];

export const createTaskRequirements = [
    check("title", "MSG from validator: Title is required").notEmpty().trim().escape(),
    check("description", "MSG from validator: Description is required").notEmpty().trim().escape(),
];

export const updateTaskRequirements = [
    check("title", "MSG from validator: Title is required").notEmpty().trim().escape(),
    check("description", "MSG from validator:Description is required").notEmpty().trim().escape(),
    check("completed", "MSG from validator: Completed is required").notEmpty().trim().escape().isBoolean()
];
