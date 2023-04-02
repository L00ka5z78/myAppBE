import * as jwt from 'jsonwebtoken';
import {Request, Response} from 'express';

export const authorize = async (req: Request | any, res: Response, next: (err?: Error) => void) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({message: 'Not authorized!'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
        if (typeof decoded === 'string') {
            throw new Error('Token is not valid');
        }
        req.user = decoded.user;
        next();
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({error: 'Internal server error'});
    }
};
