import { validationResult } from "express-validator";

export const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].message })
    }
    next();
}
/**not fully understand this, just copied from docs and hope it will work :/
 * it works, but some of features needs fixing. require more tests in postman to catch all bugs
 */

