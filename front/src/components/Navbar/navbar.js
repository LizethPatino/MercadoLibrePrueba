 
import React, {useState} from "react";
import logoMeli from '../../Images/Logo_ML.png';
import lupita from '../../Images/ic_Search.png';
import './navbar.scss';
import { Link, useHistory } from "react-router-dom";



const Search = () => {

  /*Estado inicial*/
  const [item, setData] = useState('');
  const routerH = useHistory();
  const searchLink = `/items?search=${item}`;

  

 /* enviar item de busqueda */
  const sentData = (event) => {
    event.preventDefault();
     routerH.push(searchLink);
}

  
  return (
    /*Genera la barra de busqueda*/
    <div>
        <nav aria-label="Search service" className="navbar navSearch">
                <div className="container-fluid d-flex justify-content-lg-center">
                    <form className="d-flex col-md-9" onSubmit={sentData}>
                        <Link to={{ pathname: '/'}}>
                            <img src={logoMeli} className="navbar-brand" alt="Mercado Libre Logotype"/>
                        </Link>
                        <input className="form-control rounded-0 border-0" type="text" placeholder="Nunca dejes de buscar"
                          aria-label="Search" onChange={e => setData(e.target.value)} value={item} required/>
                          <button className="butonSearch" type="submit">
                            <img src={lupita} alt='Search icon' aria-label="button search"/>
                          </button>
                    </form>
                </div>
        </nav>
    </div>
  );
};


export default Search;