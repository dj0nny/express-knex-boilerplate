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

const getTodo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const todo = await knex.select('*').from('todo').where('id', id);

    res.status(200).json({
      todo,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const addTodo = async (req, res, next) => {
  const { name } = req.body;
  try {
    if (name === '' || name === undefined) {
      throw new Error('Name cannot be blank');
    }
    const insertedTodo = await knex('todo').returning('*').insert({ name });

    res.status(200).json({
      id: insertedTodo[0],
      name,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedTodo = await knex('todo').where('id', id).del();

    if (deletedTodo === 0) {
      throw new Error('Row not found');
    }

    res.status(200).json({
      todoId: id,
      deleted: deletedTodo,
    });
  } catch (error) {
    res.status(404);
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  const { id, name } = req.body;
  try {
    if ((id === '' || id === undefined) || (name === '' || name === undefined)) {
      throw new Error('Id or name cannot be blank');
    }
    const isUpdatedTodo = await knex('todo').where('id', id).update({ name });

    if (isUpdatedTodo === 0) {
      throw new Error('Row not found');
    }

    res.status(200).json({
      updatedTodo: {
        name,
        id,
      },
      updated: isUpdatedTodo,
    });
  } catch (error) {
    res.status(404);
    next(error);
  }
};

module.exports = {
  getAllTodo,
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
};
