const express = require('express');
const routes = express.Router();

const Motorista = require('./controllers/motorista');
const Pedido = require('./controllers/pedido');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'SNOOPY PetShop Delivery' });
});

routes.post('/motoristas',Motorista.create);
routes.get('/motoristas',Motorista.read);
routes.get('/motoristas/:id',Motorista.readOne);
routes.patch('/motoristas/:id',Motorista.update);
routes.delete('/motoristas/:id',Motorista.remove);

routes.post('/pedidos',Pedido.create);
routes.get('/pedidos',Pedido.read);
routes.get('/pedidos/:id',Pedido.readOne);
routes.patch('/pedidos/:id',Pedido.update);
routes.delete('/pedidos/:id',Pedido.remove);

module.exports = routes;