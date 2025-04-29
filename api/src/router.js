const express = require('express');
const router = express.Router();

const Pedido = require('./controllers/pedidos');
const Item = require('./controllers/item');

router.get('/', (req, res) => {
    res.json({ titulo: 'Pedidos Exps. Patterns' });
});

router.post('/pedidos',Pedido.create);
router.get('/pedidos',Pedido.read);

router.post('/item',Item.create);
router.get('/item',Item.read);

module.exports = router;