
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
import Cart from './Component/Cart2';
import { ShoeProvider } from './Context/ShoeContext';
import Detail from './Component/Detail';



function App() {
 function ShoeDetail({match}){
   return(
     <Detail id={match.params.id} />
   )
 }
  
  return (
    <div className="App">
     <ShoeProvider>
      <BrowserRouter>
      <Header />
      <Switch>
       <Route path="/home" component={()=><Home/>} />
       
        <Route exact path="/store" component={Store} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/:id" component={ShoeDetail} />
        
      <Redirect to="/" />
     </Switch>
     </BrowserRouter>
     </ShoeProvider>
    </div>
  );
}

export default App;
