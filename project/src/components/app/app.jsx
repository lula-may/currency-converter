import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import NotFound from "../not-found/not-found.jsx";
import {AppRoute, NAVIGATION_LINKS} from "../../const.js";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT} >
          <Main
            currentPage={NAVIGATION_LINKS[2]}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

