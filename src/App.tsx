import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Navbar } from "./components/Navbar";
import { BlurredNavPane } from "./components/BlurredNavPane";

function App() {
  return (
    <Router>
      <Navbar />
      {/* glass effect behind nav */}
      {/* <BlurredNavPane /> */}
      <Switch>
        <Route exact path = '/' component = { Home } />
      </Switch>
    </Router>
  );
}

export default App;
