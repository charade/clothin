import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Navbar } from "./components/Navbar";
import * as cartActionCreators from './state/actions-creators/cart-action-creators';
import { bindActionCreators } from "redux"; 
import { Landing} from "./components/Landing";

function App() {
  const dispatch = useDispatch();
  const { loadCart } = bindActionCreators(cartActionCreators, dispatch);

  //load saved cart
  useEffect(() => {
    const cart = localStorage.getItem('cart');
    cart && loadCart(JSON.parse(cart));
},[])

  return (
    <Router>
      <Navbar />
      {/* glass effect behind nav */}
      {/* <BlurredNavPane /> */}
      <Switch>
        <Route exact path = '/' component = { Landing } />
        <Route  path = '/home' component = { Home } />
      </Switch>
    </Router>
  );
}

export default App;
