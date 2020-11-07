
import './App.css';
import Header from './Component/Header';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Component/Home';
import Store from './Component/Store';
import Cart from './Component/Cart';
import { ShoeProvider } from './Context/ShoeContext';



function App() {
  
  return (
    <div className="App">
     <ShoeProvider>
      <BrowserRouter>
      <Header />
      <Switch>
       <Route path="/home" component={()=><Home/>} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/cart" component={Cart} />
      <Redirect to="/home" />
     </Switch>
     </BrowserRouter>
     </ShoeProvider>
    </div>
  );
}

export default App;
