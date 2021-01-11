 
import React from "react";
import './notFound.scss';
import { FaSearch } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const NotFound = () => {

  return (
    /*Genera un jumbotron con un mensaje de busqueda no encontrada*/
    <div className="container p-2">
        <Helmet>
            <title>Página no encontrada</title>
            <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
        </Helmet>
       <div id="jumbotronNotFound" className="jumbotron mt-2">
       <div className="container-fluid d-flex justify-content-lg-center">
            < FaSearch className="SearchIcon"/>
            <h3 className="resultsNotFound mt-2">No se encontraron resultados para tu búsqueda</h3>
                </div>
        </div>     
</div>
  );
};


export default NotFound;