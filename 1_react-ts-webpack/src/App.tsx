import "./assets/scss/module1.scss"

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Greet from './component/Greet';

const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap'];
const title = "This is header";

ReactDOM.render(
    <Greet techs={techStack} headerTitle={title} />,
    document.getElementById('app')
);