import * as React from 'react';
import Greet from './component/Greet';

export const Home = (props:any) => {
    const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap', 'Fontawsome'];
    console.log("HOME: PROPS :")
    console.log(props)
    return (
        <Greet techs={techStack} {...props}/>
    )
}