import React, {useState, useEffect} from "react";
import Breadcrumbs from "../Breadcrumbs/breadcrumbs";
import logoMeli from '../../Images/Logo_ML.png';
import lupita from '../../Images/ic_Search.png';
import { Link, useHistory } from "react-router-dom";
import {URL_API} from '../../Constants/UrlApi';
import querySearch from "stringquery";

const SpecificProduct = (props) => {

    var query = querySearch(props.match.params.id);
    const apiUrl = `${URL_API}/${props.match.params.id}`;

   /*Estado inicial*/
   const [appState, setAppState] = useState({
    loading: false,
    categories: [],
    itemEspecifico: [],
    price:null
  });
  
 /* LLamado a la API */ 
 const callApi =  () => {
    //setAppState({ loading: true });
   fetch(apiUrl).then((res) => res.json())
      .then((item) => {
        setAppState({ 
          loading: false,
          categories: item.categories,
          itemEspecifico: item.item,
          price:item.item.price});
      });
    };
  
  useEffect(() => {
    callApi();
  }, [apiUrl]);

  
  return (
    <div className="container">
            <div className="jumbotron">
                <div key={appState.itemEspecifico.id}>
                    <div  className="d-flex bd-highlight">
                        <div className="p-2 col-md-9 bd-highlight"> 
                            <img src={appState.itemEspecifico.picture} className="img-fluid" alt={appState.itemEspecifico.title}/>
                            <h2>Descripción del producto</h2>
                            <p>{appState.itemEspecifico.description}</p>
                    </div>
                    <div className="p-2 mt-3 col-md-3 bd-highlight">   
                    {appState.itemEspecifico.condition==='new'?<p className="productName">Nuevo - {appState.itemEspecifico.sold_quantity} Vendidos </p>:<p className="productName">Usado - {appState.itemEspecifico.sold_quantity} Vendidos </p>}
                    
                    <p className="productName">{appState.itemEspecifico.title}</p>
                    <p className="productName">$ {appState?.price?.amount}</p>
                    <button className="btn btn-info">Comprar</button>
                    </div>
                    </div>  
                </div> 
        </div>     
</div>
  );
};


export default SpecificProduct;