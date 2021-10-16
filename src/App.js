import React from "react";
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import {MovieFile} from "./Movie/MovieFile";
import {HeaderNav} from "./Movie/HeaderNav"
import {MovieDetails} from "./Movie/MovieDetails"

const App = () => {
  
  return (
    <Router>
        <HeaderNav/>
        <Switch>
            <Route path="/" exact component={MovieFile}/>
            <Route path="/details/:id" exact component={MovieDetails}/>
        </Switch>
    </Router>
        

  )
}
export default App 