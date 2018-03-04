import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { Home } from '../../pages/home/Home';
import { Contact } from '../../pages/contact/Contact';
import { About } from '../../pages/about/About';

const configs:any = require("../../configs/env_config.json");
const basePath = configs.githubBuild === "githubBuild"? configs.router_basename_build : configs.router_basename_dev
export const MyRouter = () => {
  return (
    <BrowserRouter basename={basePath}>
      <div>
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
        <hr />
        <Route exact path={'/'} component={Home} />
        <Route path={'/home'} component={Home} />
        <Route path={'/contact'} component={Contact} />
        <Route path={'/about'} component={About} />
        {/* for referesh */}
        <Route exact path={basePath+'/'} component={Home} />
        <Route path={basePath+'/home'} component={Home} />
        <Route path={basePath+'/contact'} component={Contact} />
        <Route path={basePath+'/about'} component={About} />
        {/* ways to add component in route - component, render, children */}
      </div>
    </BrowserRouter >
  )
}
