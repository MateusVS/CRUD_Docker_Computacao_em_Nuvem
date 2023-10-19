const express = require('express');
const ToDoController = require('./controllers/ToDoController');

const routes = express.Router();
const toDoController = new ToDoController();

routes.get('/', toDoController.index);
routes.post('/todos/create', toDoController.create);
routes.delete('/todos/:id', toDoController.destroy);
routes.put('/todos/:id', toDoController.edit);

module.exports = routes;
