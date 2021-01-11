import React, {useState, useEffect} from "react";
import Breadcrumbs from "../Breadcrumbs/breadcrumbs";
import {URL_API} from '../../Constants/UrlApi';
import querySearch from "stringquery";
import './specificProduct.scss';

const SpecificProduct = (props) => {

    /* costantes definidas */
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
         <Breadcrumbs categories={appState.categories} itemSearch={props.match.params.id}></Breadcrumbs>
            <div className="jumbotron">
                <div key={appState.itemEspecifico.id}>
                    <div  className="d-flex bd-highlight">
                        <div className="p-2 col-md-9 bd-highlight"> 
                            <img src={appState.itemEspecifico.picture} className="img-fluid imagenOfficialSize" alt={appState.itemEspecifico.title}/>
                            <div className="descriptionArea">
                            <h2 className="productTitleSpecific">Descripción del producto</h2>
                            <p className="text-justify productDescription">{appState.itemEspecifico.description}</p>
                            </div>   
                        </div>
                    <div className="informationProduct col-md-3 bd-highlight">   
                    {appState.itemEspecifico.condition==='new'?<p className="quantityProduct">Nuevo - {appState.itemEspecifico.sold_quantity} Vendidos </p>:<p className="quantityProduct">Usado - {appState.itemEspecifico.sold_quantity} Vendidos </p>}

                    <p className="nameProductSpecific">{appState.itemEspecifico.title}</p>
                    <p className="priceProduct">$ {appState?.price?.amount}</p>
                    <button className="btn buttonProperties col-md-12">Comprar</button>
                    </div>
                    </div>
                </div> 
        </div>     
</div>
  );
};


export default SpecificProduct;