import React from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "layouts/Layout";
import About from "views/About";
import Projects from "views/Projects";
import Resume from "views/Resume";
import Contact from "views/Contact";
import Playground from "views/Playground";


const hist = createBrowserHistory();

const Routes = () => (
  <div className="view-routes">
    <Layout>
      <Router history={hist}>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/playground" component={Playground} />
      </Router>
    </Layout>
  </div>
);

export default Routes;
