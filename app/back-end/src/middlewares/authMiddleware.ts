import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.header.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Token not '})
}