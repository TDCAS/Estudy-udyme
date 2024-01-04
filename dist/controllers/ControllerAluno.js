"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);
class ControllerAlunos {
  async cadastraAlunos(req, res) {
    try {
      const novoAluno = await _Aluno2.default.create(req.body);
      const {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      } = novoAluno;

      return res.json({
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
      // res.status(401).json({
      //   tudoCerto: true,
      // });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }

      await aluno.destroy();
      return res.json({ message: ['usuario apafo'] });
    } catch (e) {
      console.log(e);
      return res.json({ message: ['erro na requisicao'] });
    }
  }

  async mostraAluno(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['id vazio'],
        });
      }
      const aluno = await _Aluno2.default.findByPk(id,{
        attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
        order: [["id", "DESC"], [_Fotojs2.default, 'id', "DESC"]],
        include: {
          model: _Fotojs2.default,
          attributes: ["id","filename","url"]
        }
      });

      if (!id) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async mostratodosalunos(req, res) {
    try {
      const todosalunos = await _Aluno2.default.findAll({
        attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
        order: [["id", "DESC"], [_Fotojs2.default, 'id', "DESC"]],
        include: {
          model: _Fotojs2.default,
          attributes: ["id","filename","url"]
        }
      });
      return res.json(todosalunos);
    } catch (e) {
      return res.json(null);
    }
  }

  async updateAluno(req, res) {
    try {
      const { id } = req.params;

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }
      const novosDados = await aluno.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
}
exports. default = new ControllerAlunos();
