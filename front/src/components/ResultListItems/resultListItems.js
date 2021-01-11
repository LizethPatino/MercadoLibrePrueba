import React, {useState,useEffect} from "react";
import Breadcrumbs from "../Breadcrumbs/breadcrumbs";
import './resultListItems.scss';
import envio from '../../Images/ic_shipping.png';
import {URL_API} from '../../Constants/UrlApi';
import querySearch from "stringquery";




const ListItems = (props) => {

    var query = querySearch(props.location.search);
    const apiUrl = `${URL_API}?q=${query.search}`;

   /*Estado inicial*/
   const [appState, setAppState] = useState({
    loading: false,
    categories: [],
    items: [],
  });
  
 /* LLamado a la API */ 
 const callApi =  () => {
    //setAppState({ loading: true });
   fetch(apiUrl).then((res) => res.json())
      .then((items) => {
        setAppState({ 
          loading: false,
          categories: items.categories,
          items: items.items});
      });
    };
  
  useEffect(() => {
    callApi();
  }, [apiUrl]);

return(
    <div className="container">
        <Breadcrumbs categories={appState.categories} itemSearch={query.search}></Breadcrumbs>
                <div className="jumbotron">
                {appState.items.map((item) => (   
                    <div key={item.id}>
                        <div  className="d-flex bd-highlight">
                            <div className="p-2 flex-grow-2 bd-highlight"> 
                                <img src={item.picture} className="img-fluid" alt={item.title}/>
                        </div>
                        <div className="p-2 col-md-6 bd-highlight">
                             <span className="price">$ {item.price.amount}</span>
                             <img src={envio} className="ml-2 mb-2" alt='shippingButton'/>
                             <p className="productName">{item.title}</p>
                        </div>
                        <div className="p-2 flex-grow-1">
                            <p className="cityName d-flex justify-content-center mt-3">{item.address}</p>
                        </div>
                        </div>  
                        <hr />
                    </div>
                ))}    
            </div>     
    </div>
);
};




export default ListItems;