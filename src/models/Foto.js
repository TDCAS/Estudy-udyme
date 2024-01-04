import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';
export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode fica vazio',
          },

        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode fica vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get(){
          return `http://localhost:3001/${this.getDataValue('filename')}`
        }
      }
    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
