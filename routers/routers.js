const express = require('express');
const { Router } = express;
const router = Router();

const ProductosApi = require('../api/productos.js');
const newProduct = new ProductosApi();

////////////////////////////////////////////////////////////////////////////

router.get('/', (req, res) => {
    res.send(newProduct.listarAll());
});

router.post('/', (req, res) => {
    const newProd = req.body;
    res.status(201).send(newProduct.save(newProd));
});

router.get('/:id', (req, res) => {
    res.json(newProduct.listar(req.params.id));
});

router.delete('/:id', (req, res) => {
    res.status(201).send(newProduct.borrar(req.params.id));
});

////////////////////////////////////////////////////////////////////////////

module.exports = router;