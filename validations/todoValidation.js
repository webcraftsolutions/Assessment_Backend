const { body, validationResult } = require('express-validator');

exports.validateTodo = [
  body('title').notEmpty().withMessage('Title is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];