import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: ['E-mail ja existe'],
        },
        validate: {
          isEmail: {
            msg: ['E-mail invalido'],
          },
        },
      },
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
