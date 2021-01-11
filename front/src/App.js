import Search from './Components/Navbar/navbar';
import { Route ,BrowserRouter, Switch } from "react-router-dom";
import ListItems from './Components/ResultListItems/resultListItems';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="background-template">
        <Search></Search> 
        <Switch>
          <Route path="/items" component={ListItems} />
         
        </Switch>
      </div>
    </BrowserRouter>
       

  );
}

export default App;
