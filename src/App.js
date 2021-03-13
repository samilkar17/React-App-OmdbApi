import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Detalle from "./componentes/Detalle/Detalle";
import Home from "./componentes/Home/Home";
import { Notfound } from "./componentes/Detalle/Notfound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Detalle/:id" component={Detalle} />
          <Route component={Notfound} />
        </Switch>
      </div>
    );
  }
}

export default App;
