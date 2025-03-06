import express from 'express';
import { greet } from '../controllers/greet.controller.js';

// Create a new router instance
const router = express.Router();

// Define the greet route
router.get('/', greet);

export default router;