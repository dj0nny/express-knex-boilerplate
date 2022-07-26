const router = require('express').Router();

const {
  getAllTodo, getTodo, addTodo, deleteTodo, updateTodo,
} = require('../controllers/todo.controller');

router.get('/', getAllTodo);
router.get('/:id', getTodo);
router.post('/', addTodo);
router.delete('/:id', deleteTodo);
router.put('/', updateTodo);

module.exports = router;
