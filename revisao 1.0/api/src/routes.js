const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Pedidos = require('./controllers/pedidos');
const Contem = require('./controllers/contem');
const Pizza = require('./controllers/pizzas');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Pizzaria' });
});

routes.post('/clientes', Cliente.create);
routes.get('/clientes', Cliente.read);
routes.get('/clientes/:id', Cliente.readOne);
routes.put('/clientes/:id', Cliente.update);
routes.delete('/clientes/:id', Cliente.remove);

routes.post('/pedidos', Pedidos.create);
routes.get('/pedidos', Pedidos.read);
routes.get('/pedidos/:id', Pedidos.readOne);
routes.put('/pedidos/:id', Pedidos.update);
routes.delete('/pedidos/:id', Pedidos.remove);

routes.post('/contem', Contem.create);
routes.get('/contem', Contem.read);
routes.get('/contem/:id', Contem.readOne);
routes.put('/contem/:id', Contem.update);
routes.delete('/contem/:id', Contem.remove);

routes.post('/pizza', Pizza.create);
routes.get('/pizza', Pizza.read);
routes.get('/pizza/:id', Pizza.readOne);
routes.put('/pizza/:id', Pizza.update);
routes.delete('/pizza/:id', Pizza.remove);

module.exports = routes;