import React, {useState,useEffect} from "react";
import Breadcrumbs from "../Breadcrumbs/breadcrumbs";
import './resultListItems.scss';
import envio from '../../Images/ic_shipping.png';
import {URL_API} from '../../Constants/UrlApi';
import querySearch from "stringquery";
import { Link} from "react-router-dom";
import NotFound from "../NotFound/notFound";
import { Helmet } from "react-helmet";

const ListItems = (props) => {

    var query = querySearch(props.location.search);
    const apiUrl = `${URL_API}?q=${query.search}`;

   /*Estado inicial*/
   const [appState, setAppState] = useState({
    categories: [],
    items: [],
  });
  
 /* LLamado a la API */  
  useEffect(() => {
    const callApi =  () => {
      fetch(apiUrl).then((res) => res.json())
         .then((items) => {
           setAppState({ 
             categories: items.categories,
             items: items.items});
         });
       };
       callApi();
  }, [apiUrl]);

  
/* se pinta el componente que visualiza la lista de resultados traidos por la api */
return(
  <div className="container">
     <Helmet>
            <title>Resultados de búsqueda</title>
            <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
      </Helmet>
    {
      appState.items.length>1 ?
      <section>
      <Breadcrumbs categories={appState.categories} itemSearch={query.search}></Breadcrumbs>
      <div id="jumbotron" className="jumbotron">
      {appState.items.map((item) => (   
        <div key={item.id}>
              <Link className='text-body text-decoration-none'  to={{ pathname: `/items/${item.id}`}}>
              <div  className="d-flex bd-highlight">
                    <div className="p-2 col-md-2 bd-highlight"> 
                      <img src={item.picture} id="img-fluid" className="img-fluid" alt={item.title}/>
                    </div>
                    <div className="p-2 mt-3 col-md-6 bd-highlight">
                          <span className="price">$ {item.price.amount}</span>
                          <img src={envio} className="ml-2 mb-2" alt='shippingButton'/>
                          <p className="productName">{item.title}</p>
                   </div>
                    <div className="p-2 flex-grow-1">
                        <p className="cityName d-flex justify-content-center mt-4">{item.address}</p>
                    </div>
              </div>  
              </Link>
              <hr/>
        </div>
      ))}    
      </div>     
      </section>
      :
      <NotFound></NotFound>     
    }              
    </div>
);
};




export default ListItems;