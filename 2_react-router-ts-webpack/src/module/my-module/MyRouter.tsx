import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { Home } from '../../pages/home/Home';
import { Contact } from '../../pages/contact/Contact';
import { About } from '../../pages/about/About';

const configs:any = require("../../configs/env_config.json");

export const MyRouter = () => {
  return (
    <BrowserRouter basename={configs.githubBuild === "githubBuild"? configs.router_basename_build : configs.router_basename_dev}>
      <div>
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <hr />
        <Route exact path={configs.githubBuild === "githubBuild"? configs.router_basename_build : configs.router_basename_dev+'/'} component={Home} />
        <Route path={configs.githubBuild === "githubBuild"? configs.router_basename_build : configs.router_basename_dev+'/home'} component={Home} />
        <Route path={configs.githubBuild === "githubBuild"? configs.router_basename_build : configs.router_basename_dev+'/contact'} component={Contact} />
        <Route path={configs.githubBuild === "githubBuild"? configs.router_basename_build : configs.router_basename_dev+'/about'} component={About} />
        {/* ways to add component in route - component, render, children */}
      </div>
    </BrowserRouter >
  )
}
