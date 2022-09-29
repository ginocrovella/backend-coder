const express = require('express');
const app = express();

const router = require('./routers/routers.js')

////////////////////////////////////////////////////////////////////////////////////

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api/productos', router);

////////////////////////////////////////////////////////////////////////////////////

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`listening on port ${server.address().port}`);
});