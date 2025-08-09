import { Router } from 'express';
import { login } from '../controllers/login.controller'

const router = Router();

// POST
router.post('/login', login);

export default router;
