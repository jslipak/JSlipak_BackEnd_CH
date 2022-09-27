const  orders  = require('../models/order.models');

// ASK: why is the Business Logic to changeStatusById 
class Order {
  async getAll(req, res) {
    const data = await orders.find();
    res.json({ items: data });
  }
  async create(req, res) {
    console.log(req.body)
    const newOrder = {
      user: req.user.userId,
      email: req.user.username,
      items: req.body.products}

    const newData = await orders.create(newOrder);
    res.json({ item: newData });
  }
  async getById(req, res, next) {
    try {
      const obj = await orders.findById(req.params.id);
      res.json({ item: obj });
    } catch (err) {
      next(err);
    }
  }
  async changeStatusById(req, res, next) {
    try {
      const obj = await orders.findByIdAndUpdate(req.params.id, { status: req.body.status });
      res.json({ item: obj });
      } catch (err) {
        next(err);
      }
  }
  //No se puede borrar , actulizar por un tema de trazabilidad
 }

module.exports = new Order();
