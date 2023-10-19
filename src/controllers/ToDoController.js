const { ToDo } = require('../models');

class ToDoController {
  async index(req, res) {
    try {
      const todos = await ToDo.findAll();
      res.render('pages/index', {
        todos,
      });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar ToDos' });
    }
  }

  // async show(req, res) {
  //   const { id } = req.params;
  //   try {
  //     const todo = await ToDo.findByPk(id);
  //     if (todo) {
  //       res.json(todo);
  //     } else {
  //       res.status(404).json({ error: 'ToDo não encontrado' });
  //     }
  //   } catch (err) {
  //     res.status(500).json({ error: 'Erro ao buscar o ToDo' });
  //   }
  // }

  async create(req, res) {
    const { title, description } = req.body;
    try {
      await ToDo.create({ title, description });
      res.redirect('/');
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar o ToDo' });
    }
  }

  async edit(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const todo = await ToDo.findByPk(id);
      if (todo) {
        await todo.update({ title, description });
        res.json(todo);
      } else {
        res.status(404).json({ error: 'ToDo não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Erro ao editar o ToDo' });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const todo = await ToDo.findByPk(id);
        if (todo) {
          await todo.destroy();
          res.json({ message: 'ToDo excluído com sucesso' });
        } else {
          res.status(404).json({ error: 'ToDo não encontrado' });
       }
     } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir o ToDo' });
      }
    }
  }

module.exports = ToDoController;
