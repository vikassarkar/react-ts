import * as React from 'react';
import { ParallaxBanner } from './component/ParallaxBanner';
import { AppIntro } from './component/AppIntro';
import { Tutorial } from './component/Tutorial';

export const Home = (props: any) => {
    const techStack = ['React', 'Typescript', 'Redux', 'Webpack', 'Bootstrap', 'Fontawsome'];
    console.log("ROUTER PROPS");
    console.log(props);
    return (
        <div className="home-container">
            <ParallaxBanner />
            <div className="spacer"></div>
            <AppIntro techs={techStack} {...props} />
            <div className="spacer"></div>
            <Tutorial />
            <div className="spacer"></div>
        </div>
    )
}