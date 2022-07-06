import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MovieFile } from "./components/movie/MovieFile";
import { Navigation } from "./components/navigation/Navigation";
import { MovieDetails } from "./components/movieDetails/MovieDetails";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={MovieFile} />
        <Route path="/details/:id" exact component={MovieDetails} />
      </Switch>
    </Router>
  );
};
export default App;
