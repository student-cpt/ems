import express from 'express'
import authMiddleware from '../middleware/authMiddlware.js'
import { addDepartment } from '../Controllers/departmentController.js'


const router = express.Router()

router.post('/add', authMiddleware, addDepartment)


export default router;