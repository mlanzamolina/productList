import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detalle from "./views/Detalle";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Detalle/:id">
            <Detalle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
