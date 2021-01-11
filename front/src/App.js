import Search from './Components/Navbar/navbar';
import { Route ,BrowserRouter, Switch } from "react-router-dom";
import ListItems from './Components/ResultListItems/resultListItems';
import './App.css';
import SpecificProduct from './Components/SpecificProduct/specificProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="background-template">
        <Search></Search> 
        <Switch>
          <Route path="/items/:id" exact component={SpecificProduct} />
          <Route path="/items" component={ListItems} />
        </Switch>
      </div>
    </BrowserRouter>
       

  );
}

export default App;
