import React from "react";
import Articles from "./pages/articles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router> 
    <div>
      <Switch>
      <Route exact path="/" component={Articles} />
      <Route component={Articles} />
      </Switch>
    </div>
  </Router>
)

export default App;
