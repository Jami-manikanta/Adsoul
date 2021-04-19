import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import "./App.css";
import AdSoul from "./ad-soul/components/Adsoul";
import { Provider } from "mobx-react";
import listOfAppsStore from './ad-soul/stores/ListOfAppsStore'
import appsDataStore from './ad-soul/stores/AppsDataStore'

const App = () => {
  const stores={listOfAppsStore,appsDataStore}
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Provider {...stores}>
      <Switch>
        {/* <Route exact path="/page-1">
          <Page1 />
        </Route> */}
        <Route path="/">
          <AdSoul />
        </Route>
      </Switch>
      </Provider>
    </Router>
  );
};

export default App;
