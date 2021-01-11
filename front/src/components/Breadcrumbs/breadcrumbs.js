import React from "react";
import './breadcrumbs.scss';

const Breadcrumbs = (props) => {
    
/* recorre el arreglo que viene de props de las categorias obtenidas */
return(
    <nav aria-label="breadcrumb">
        {props.categories.length ? (
            <ol id="itemBreadcrum" className="breadcrumb">   
              {props.categories.map((category, index) => (
                    <li key={index} id="breadcrumSpecific" className="breadcrumb-item">{category}</li>    
              ))}
            </ol>
        ) : <ol id="itemBreadcrum" className="breadcrumb">
                <li  id="breadcrumSpecific" className="breadcrumb-item">Inicio</li>
                <li  id="breadcrumSpecific" className="breadcrumb-item active text-capitalize" aria-current="page">{props.itemSearch}</li>
            </ol> }   
    </nav>
);

};

export default Breadcrumbs;