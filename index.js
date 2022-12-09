const express = require('express');
const { getConnection } = require('./db/db-connect-mongo');
require('dotenv').config();  // es necesario para poder usar las variables de entorno en este caso PORT
const cors = require('cors');

const usuario = require('./router/usuario')

const app = express();
const port = process.env.PORT 

app.use(cors()); 

getConnection();

app.use(express.json()); // Parseo Json

app.use('/usuario', usuario);
app.use('/estado-equipo', require('./router/estadoEquipo'));
app.use('/inventario', require('./router/inventario'));
app.use('/marca', require('./router/marca'));
app.use('/tipo-equipo', require('./router/tipoEquipo'));
app.use('/auth', require('./router/auth'));

app.listen(port, () => {
    console.log(`API REST corriendo en el puerto ${port}`)
})
