"use strict";Object.defineProperty(exports, "__esModule", {value: true});class ControllerHome {
  async index(req, res) {
    res.json('ola');
    // res.status(401).json({
    //   tudoCerto: true,
    // });
  }
}

exports. default = new ControllerHome();
