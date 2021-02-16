import {HashRouter as Router ,Route,Switch} from "react-router-dom";
import {Home,AboutMe,PortFolio,NotFound} from "../src/pages";
function App() {
  return (
    <Router>
     <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/about-me">
        <AboutMe/>
      </Route>
      <Route exact path="/project/:company?">
        <PortFolio/>
      </Route>
      <Route component={NotFound}/>
      </Switch>
  </Router>
  );
}

export default App;
