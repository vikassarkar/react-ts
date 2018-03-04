import * as React from 'react';

import { Home } from '../../pages/home/Home';
import { Contact } from '../../pages/contact/Contact';
import { About } from '../../pages/about/About';

import { BrowserRouter, Link, Route } from 'react-router-dom';

export const MyRouter = () => {
  return (
    <BrowserRouter basename="/react-ts/2_react-router-ts-webpack/bundle-eg">
      <div>
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        {/* ways to add component in route - component, render, children */}
      </div>
    </BrowserRouter >
  )
}
