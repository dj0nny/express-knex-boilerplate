const knex = require('../database/knex');

const getAllTodo = async (req, res, next) => {
  try {
    const todoList = await knex.select('*').from('todo').orderBy('id');

    res.status(200).json({
      todoList,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = {
  getAllTodo,
};
