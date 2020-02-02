import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

import Header from "./header";
import Footer from "./footer";
function App() {
  return (
    <div className="App">
      <Router forceRefresh>
        <Route path="/" render={routeProps => <Header {...routeProps} />} />
        <div className="app-mid">
          <Switch>
            <Route
              path="/login/"
              exact
              render={routeProps => <Login {...routeProps} />}
            />
            <Route
              path="/signup/"
              exact
              render={routeProps => <Signup {...routeProps} />}
            />
            <Route
              path="/home/"
              exact
              render={routeProps => <Home {...routeProps} />}
            />
            <Route
              path="/"
              exact
              render={routeProps => <Home {...routeProps} />}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
