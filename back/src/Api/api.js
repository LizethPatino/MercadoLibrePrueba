/*Librerias Usadas*/
const request = require('request')
const express = require('express')
const router = express.Router()
const constantes = require('../Utils/constantes');


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

/*Método encargado de realizar el request de la descripción del producto*/
router.get('/items/:id', (req, res) => {
    const URL=`${constantes.URLAPI}/items/${req.params.id}`;
    const URLDESCRIPCION=`${constantes.URLAPI}/items/${req.params.id}/description`;
    request(URLDESCRIPCION, function(error, response, body) {
        if (!error) {
            const data = JSON.parse(body);
            if (response.statusCode===200) {
                llamarRequestDetalle(URL,res,data.plain_text);
            }else if(response.statusCode===404){
            res.status(404).send('No hemos encontrado Información del producto');
            }
        } else {
            res.status(500).send('Upss, ha ocurrido algo, Por favor intenta más tarde');
        }
    });
    

  });

/*Método encargado */
function llamarRequestCategoria(categoria,res){
    var cate=[];
    const URLCATEGORIA=`${constantes.URLAPI}/categories/${categoria}`;
    request(URLCATEGORIA, function(error, response, body) {
        if (!error) {
            const data = JSON.parse(body);
            if (response.statusCode===200) {
                cate = data.path_from_root.map((category) => {return category.name});
            console.log("que hay",cate);
            }else if(response.statusCode===404){
            res.status(404).send('No hemos encontrado Información del producto');
            }
        } else {
            res.status(500).send('Upss, ha ocurrido algo, Por favor intenta más tarde');
        }
    });
    return cate;
}




/*Método encargado de realizar el consumo del servicio de la api de mercado libre para buscar información
detallada de un producto*/
function llamarRequestDetalle(url,res,descripcion){
    request(url, function(error, response, body) {
        if (!error) {
            const data = JSON.parse(body);
            if (response.statusCode===200) {
               /// var laCategoria=llamarRequestCategoria(data.category_id,res);
               res.send(crearJsonEspecifico(data,descripcion,data.category_id,res)); 
            }else if(response.statusCode===404){
            res.status(404).send('No hemos encontrado Información del producto');
            }
        } else {
            res.status(500).send('Upss, ha ocurrido algo, Por favor intenta más tarde');
        }
    });
}





  /*Método encargado de definir y construir el formato del Json de salida para un producto
  especifico*/
function crearJsonEspecifico(item,descripcion,categoria,res){
    console.log(categoria,"llega este dato aqui");
    llamarRequestCategoria

        item={
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

module.exports = router;