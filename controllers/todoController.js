const Todo = require('../models/todoModel');

// Create a new Todo
exports.createTodo = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;
    const newTodo = await Todo.create({
      title,
      description,
      completed,
      user: req.user.id,
    });
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

// Get all Todos for the logged-in user
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

// Update a specific Todo
exports.updateTodo = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, description, completed } = req.body;
  
      // Find the Todo item by ID and ensure it belongs to the logged-in user
      const todo = await Todo.findOne({ _id: id });
  
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
  
      // Check if the Todo belongs to the authenticated user
      if (todo.user.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Invalid user' });
      }
  
      // Update fields
      todo.title = title || todo.title;
      todo.description = description || todo.description;
      todo.completed = completed !== undefined ? completed : todo.completed;
  
      const updatedTodo = await todo.save();
      res.status(200).json(updatedTodo);
    } catch (error) {
      next(error);
    }
  };
  

// Delete a specific Todo
exports.deleteTodo = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      // Find the Todo item by ID
      const todo = await Todo.findOne({ _id: id });
  
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
  
      // Check if the Todo belongs to the authenticated user
      if (todo.user.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Invalid user' });
      }
  
      // Perform the deletion
      await todo.remove();
  
      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
  