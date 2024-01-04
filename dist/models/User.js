"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable spaced-comment */
//importando sequelize e o Model
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
/* eslint-disable spaced-comment */
//importando bcryptjs no model
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '', //capturar campo vazio
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: '', //capturar campo vazio
      }, //Campo password_hash não precxisa servalidao por que não ira ser passado pelo usuario
      password: {
        type: _sequelize2.default.VIRTUAL, //campo virtual que não existe na base de dados
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      //user passowrd_hash ira guard a password 'criptografada' pelo bcryptjs com salt de 8
      }
    }); //Hook colocando antes de salvar

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
