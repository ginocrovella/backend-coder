const express = require('express');
const app = express();
const fs = require('fs');
const Container = require('./container');


//////////////////////////////////////////////////////////////////

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`);
});

//////////////////////////////////////////////////////////////////

const products = new Container('./productos.txt')

//////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.send('<h1> Desafío n° 3 </h1>')
});

app.get('/productos', (req, res) => {
    res.json(products.getAll())  
});

app.get('/productosrandom', (req, res) => {
    res.json(products.getRandom())
});