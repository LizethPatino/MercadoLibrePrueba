 
import React, {useState, useEffect, useCallback } from "react";
import logoMeli from '../../Images/Logo_ML.png';
import lupita from '../../Images/ic_Search.png';
import './navbar.scss'


/*Estado inicial*/
const Search = () => {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  
 /* LLamado a la API */ 
const callApi = useCallback(
  () => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:3001/api/items?q=Apple ipod`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  },
  [],
)
  useEffect(() => {
    callApi()
  }, [callApi]);

  return (
    /*Genera la barra de busqueda*/
    <div>
        <nav className="navbar navSearch">
                <div className="container-fluid d-flex justify-content-lg-center">
                    <img src={logoMeli} className="navbar-brand" alt='mercadolibreLogo'/>
                    <form className="d-flex col-md-9">
                        <input className="form-control inputSearch rounded-0" type="text" placeholder="Nunca dejes de buscar" aria-label="Search" onClick={callApi} />
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