import Aluno from '../models/Aluno';

class ControllerAlunos {
  async cadastraAlunos(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
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
      const aluno = await Aluno.findByPk(id);
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
      const aluno = await Aluno.findByPk(id);

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
      const todosalunos = await Aluno.findAll();
      return res.json(todosalunos);
    } catch (e) {
      return res.json(null);
    }
  }

  async updateAluno(req, res) {
    try {
      const { id } = req.params;

      const aluno = await Aluno.findByPk(id);

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
export default new ControllerAlunos();
