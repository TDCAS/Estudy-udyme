class ControllerHome {
  async index(req, res) {
    res.json('ola');
    // res.status(401).json({
    //   tudoCerto: true,
    // });
  }
}

export default new ControllerHome();
