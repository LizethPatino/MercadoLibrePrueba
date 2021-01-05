/*Librerias Usadas */
const express = require('express')
//const cors = require('cors')
const UbicacionApi = require('./Api/api');


/*Constantes*/
const app = express()


/*Puerto de Escucha*/
app.listen(3001, () =>
  console.log("¡Aplicación de prueba Front escuchando en el puerto 3001!")
);

/*Ruta de la API*/
app.use('/api', UbicacionApi);





