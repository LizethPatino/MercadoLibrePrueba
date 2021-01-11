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
    item: [],
  });
  
 /* LLamado a la API */ 
 const callApi =  () => {
    //setAppState({ loading: true });
   fetch(apiUrl).then((res) => res.json())
      .then((item) => {
        setAppState({ 
          loading: false,
          categories: item.categories,
          item: item.item});
      });
    };
  
  useEffect(() => {
    callApi();
  }, [apiUrl]);

  
  return (
    <div className="container">
            <div className="jumbotron">
                <div key={appState.item.id}>
                    <div  className="d-flex bd-highlight">
                        <div className="p-2 col-md-8 bd-highlight"> 
                            <img src={appState.item.picture} className="img-fluid" alt={appState.item.title}/>
                    </div>
                    <div className="p-2 mt-3 col-md-4 bd-highlight">
                     
                         
                         <p className="productName">{appState.item.title}</p>
                    </div>
                    <div className="p-2 flex-grow-1">
                        <p className="cityName d-flex justify-content-center mt-4">{appState.item.address}</p>
                    </div>
                    </div>  

                    <hr />
                </div> 
        </div>     
</div>
  );
};


export default SpecificProduct;