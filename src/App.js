import logo from "resources/assets/logo.svg";
import React, { Fragment } from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Login from "pages/Login";

function App() {
  return (
    <Router>
      <main>
        <Nav/>
        <Switch>
            {/* <Route path="*" component={NotFound} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} /> 
            {/* <Route path="/register" component={Pages} /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;