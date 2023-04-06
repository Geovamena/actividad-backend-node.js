const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => console.log('Servidor web iniciado en el puerto 3000'));
