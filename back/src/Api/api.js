/*Librerias Usadas*/
const request = require('request')
const express = require('express')
const router = express.Router()
const constantes = require('../Utils/constantes');
cate=[];

/*Método encargado de realizar el consumo del servicio de la api de mercado libre para buscar productos*/
router.get('/items', (req, res) => {
    const URLCOMPLETA=`${constantes.URLAPI}/sites/MLA/search?q=${req.query.q}${constantes.LIMIT}`;
    request(URLCOMPLETA, function(error, response, body) {
        if (!error) {
            const data = JSON.parse(body);
            if (data.results) {
               res.send(crearJsonBusqueda(data)); 
            }
        } else {
            res.status(404).send('No hemos encontrado Resultados para tu busqueda!');
        }
    });
  });


/*Método encargado de definir y construir el formato del Json de salida*/
function crearJsonBusqueda(respuestaServ){
    var categories = [];
    if (respuestaServ.filters[0] && respuestaServ.filters[0].values[0]) {
        categories = respuestaServ.filters[0].values[0].path_from_root.map((category) => {
            return category.name});
    }
    var items = respuestaServ.results.map((item) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: Math.floor(item.price),
                decimals: +(item.price%1).toFixed(2).substring(2)
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name
        }
    });
    var respuesta = {
        author: constantes.AUTHOR,
        categories: categories,
        items: items
    }
    return respuesta;
}


  /*Método encargado de definir y construir el formato del Json de salida para un producto
  especifico*/
function crearJsonEspecifico(item,descripcion,categoria,res){
        item={
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: Math.floor(item.price),
                decimals: +(item.price%1).toFixed(2).substring(2)
            },
            picture: item.pictures.length ? item.pictures[0].url : "",
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity:item.sold_quantity,
            description:descripcion
            //address: item.address ? item.address.state_name : ''
        }
    var respuesta = {
        author: constantes.AUTHOR,
        categories: categoria,
        item: item
    }
    return respuesta;
}


/*Método encargado de orquestar ruta y llamado a metodo de llamar api*/
router.get('/items/:id', (req, res) => {
    const URL=`${constantes.URLAPI}/items/${req.params.id}`;
    const URLDESCRIPCION=`${constantes.URLAPI}/items/${req.params.id}/description`;
    let data1, data2, data3;
    llamarApi(URL)
    .then( result => {    // Result of first call
        data1 = result;
        const URLCATEGORIA=`${constantes.URLAPI}/categories/${data1.category_id}`;
        return llamarApi(URLCATEGORIA);
    })  .then( result => {    // Result of second call
        data2 = result;
        return llamarApi(URLDESCRIPCION);
    }) 
    .then( result => {     // Result of third call
        data3 = result;
        var categoriaFinal=data2.path_from_root.map((category) => {return category.name})
        res.send(crearJsonEspecifico(data1,data3.plain_text,categoriaFinal)); 
    })
    .catch( error => {
        res.status(500).send('Upss, ha ocurrido algo, Por favor intenta más tarde'); 
    });
});


/*Método encargado de realizar el consumo del servicio de la api de mercado libre para buscar información
detallada de un producto*/
function llamarApi (reqOps) {
    return new Promise ( (resolve, reject) => {
        request(reqOps, (error, response, body) => {
            if(!error && response.statusCode == 200){
                resolve( JSON.parse(body) );   
            }
            reject(error);
        });

    });
}

module.exports = router;