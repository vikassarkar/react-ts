import * as React from 'react';
import Greet from './component/Greet';

export const About = () => {
    const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap', 'Fontawsome'];
    const title = "ABOUT routing-react-ts-webpack";

    return (
        <Greet techs={techStack} headerTitle={title} />
    )
}