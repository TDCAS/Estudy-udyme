/* eslint-disable spaced-comment */
//importando sequelize e o Model
import Sequelize, { Model } from 'sequelize';
/* eslint-disable spaced-comment */
//importando bcryptjs no model
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '', //capturar campo vazio
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '', //capturar campo vazio
        unique: {
          msg: 'email ja existe',
        },
        validate: {
          isEmail: {
            msg: 'email invalido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '', //capturar campo vazio
      }, //Campo password_hash não precxisa servalidao por que não ira ser passado pelo usuario
      password: {
        type: Sequelize.VIRTUAL, //campo virtual que não existe na base de dados
        defaultValue: '', //capturar campo vazio
        validate: {
          len: {
            args: [6, 55],
            msg: 'Campo password deve ter entre 6 e 55 caracteres',
          },
        },
      },

    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      //user passowrd_hash ira guard a password 'criptografada' pelo bcryptjs com salt de 8
      }
    }); //Hook colocando antes de salvar

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
