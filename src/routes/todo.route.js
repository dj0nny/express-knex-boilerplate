const router = require('express').Router();

const { getAllTodo } = require('../controllers/todo.controller');

router.get('/', getAllTodo);

module.exports = router;
