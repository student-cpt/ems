import express, { Router } from 'express'
import { login, verify } from '../Controllers/authController.js'
import authMiddleware from '../middleware/authMiddlware.js'

const router = express.Router()


router.post('/login', login)
router.get('/verify', authMiddleware, verify)

export default router;