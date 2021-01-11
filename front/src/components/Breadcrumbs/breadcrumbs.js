import React from "react";
import './breadcrumbs.scss';

const Breadcrumbs = (props) => {
    
/* recorre el arreglo que viene de props de las categorias obtenidas */
return(
    <nav aria-label="breadcrumb">
        {props.categories.length ? (
            <ol className="breadcrumb">   
              {props.categories.map((category, index) => (
                    <li key={index} className="breadcrumb-item">{category}</li>    
              ))}
            </ol>
        ) : <ol className="breadcrumb">
                <li className="breadcrumb-item">Inicio</li>
                <li className="breadcrumb-item active" aria-current="page">{props.itemSearch}</li>
            </ol> }   
    </nav>
);

};

export default Breadcrumbs;