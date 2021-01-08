 
import React from "react";
import logoMeli from '../../images/Logo_ML.png';
import lupita from '../../images/ic_Search.png';
import './navbar.scss'




const Search = () => {
  return (
    <div>
        <nav className="navbar navSearch">
                <div className="container-fluid d-flex justify-content-lg-center">
                    <img src={logoMeli} className="navbar-brand" alt='mercadolibreLogo'/>
                    <form className="d-flex col-md-8">
                        <input className="form-control inputSearch rounded-0" type="search" placeholder="Nunca dejes de buscar" aria-label="Search" />
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