import logo from './logo.svg';
import './App.css';
import Search from './Components/Navbar/navbar';
import { Route ,BrowserRouter, Switch } from "react-router-dom";
import ListItems from './Components/ResultListItems/resultListItems';

function App() {
  return (
    <BrowserRouter>
      <div className="background-template">
        <Search></Search> 
        <Switch>
          <Route path="/t" exact component={ListItems} />
         
        </Switch>
      </div>
    </BrowserRouter>
       

  );
}

export default App;
