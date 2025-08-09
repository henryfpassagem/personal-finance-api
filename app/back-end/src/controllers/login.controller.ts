import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import userModel from '../database/models/userModel';

// Controller function for user login
export const login = async (req: Request, res: Response) => {
    try {
        //Extract email and password from request body
        const { email, password } = req.body;


        // Validate if both fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find the user by email in the database
        const user = await userModel.findOne({ where: { email }});
        if (!user){
            // If an user is not found, return an unauthorized error
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        //Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!password) {
            // If passwords don't match, return an error
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create payload explicity typed
        const payload: JwtPayload = {
            userId: user.id,
            email: user.email
        }

        // Generate token with type safety
        const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        return res.json({ token });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error'});
    }
};