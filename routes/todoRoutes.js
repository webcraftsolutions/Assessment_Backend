const express = require('express');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todoController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { validateTodo } = require('../validations/todoValidation');

const router = express.Router();

router.post('/', authenticateToken, validateTodo, createTodo); // Create a To-Do
router.get('/', authenticateToken, getTodos); // Get all To-Dos
router.put('/:id', authenticateToken, validateTodo, updateTodo); // Update a To-Do
router.delete('/:id', authenticateToken, deleteTodo); // Delete a To-Do

module.exports = router;