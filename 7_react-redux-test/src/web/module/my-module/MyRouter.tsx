import * as React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';

//import $ from "jquery";

import { Home } from '../../pages/home';
import Users from '../../pages/users';
import Header from "../../widgets/common/Header"
import { Footer } from "../../widgets/common/Footer"

interface Props {
}
interface States {
  menuToggle?: boolean;
}

export default class MyRouter extends React.Component<Props, States> {

  constructor(props: any) {
    super(props);
    this.state = {
      menuToggle: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuToggle: !this.state.menuToggle });
  }

  closeMenu() {
    this.setState({ menuToggle: false });
  }

  render() {
    const title = "React Redux";
    return (
      <HashRouter>
        <div className="module-container">
          <Header headerTitle={title} closeMenu={this.closeMenu} toggleMenu={this.toggleMenu} />
          <div className={this.state.menuToggle ? "sidebar-menu slideback-left" : "sidebar-menu slide-right"}>
            <div className="menu-header">
              <h3>Catalog</h3>
            </div>
            <div className="list-group panel">
              {/* replace -  to remove warnining error on doubleclick of same link simultneously */}
              <ul className="list-group panel list-group-item menu-list collapsed" onClick={this.toggleMenu} style={{ listStyle: "none", padding: "0" }} >
                <li><Link style={{ width: "100%" }} to={'/home'} replace><i className="fas fa-home"></i>&nbsp;Home</Link></li>
                <li><Link style={{ width: "100%" }} to={'/users'} replace><i className="fas fa-user"></i>&nbsp;Users</Link></li>
              </ul>
            </div>
          </div>
          <div className="contents-container" onClick={this.closeMenu} >
            <Route exact path={'/'} component={Home} />
            <Route path={'/home'} component={Home} />
            <Route path={'/users'} component={Users} />
            {/* ways to add component in route - component, render, children */}
          </div>
          <div className="spacer"></div>
          <Footer />
        </div>
      </HashRouter >
    )
  }
}
