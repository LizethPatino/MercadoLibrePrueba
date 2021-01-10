 
import React, {useState} from "react";
import logoMeli from '../../Images/Logo_ML.png';
import {URL_API} from '../../Constants/UrlApi';
import lupita from '../../Images/ic_Search.png';
import './navbar.scss'
import { Link, useHistory } from "react-router-dom";



const Search = () => {

  /*Estado inicial*/
  const [item, setData] = useState('');

  const routerH = useHistory()
  const searchLink = `/items?search=${item}`;
  

 /* enviar item de busqueda */
  const sentData = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + item)
    routerH.push(searchLink)
}

  
  return (
    /*Genera la barra de busqueda*/
    <div>
        <nav className="navbar navSearch">
                <div className="container-fluid d-flex justify-content-lg-center">
                    <img src={logoMeli} className="navbar-brand" alt='mercadolibreLogo'/>
                    <form className="d-flex col-md-9" onSubmit={sentData}>
                        <input className="form-control inputSearch rounded-0" type="text" placeholder="Nunca dejes de buscar"
                        aria-label="Search" onChange={e => setData(e.target.value)} value={item} />
                        <button className="butonSearch" type="submit">
                          <img src={lupita} className="img-fluid" alt='buscar'/>
                        </button>
                    </form>
                </div>
        </nav>
    </div>
  );
};


export default Search;