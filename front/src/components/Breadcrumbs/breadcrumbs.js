import React, {useState} from "react";
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
        ) : "" }   
    </nav>
);

};

export default Breadcrumbs;