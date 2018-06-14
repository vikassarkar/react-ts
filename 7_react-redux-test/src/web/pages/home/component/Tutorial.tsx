import * as React from 'react';
import "../../../../assets/images/banner_1024.jpg";
import "../../../../assets/images/banner_6401.jpg";
import "../../../../assets/images/banner_6402.jpg";

export const Tutorial = (props: any) => {
    console.log(props);
    let code = "{ ... }"
    return (
        <div className="react-intro-container">
            <div className="container">
                <div className="intro-image text-center">
                    <img src="../assets/images/banner_1024.jpg" style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="spacer"></div>
                <div className="intro-content">
                    <p>ReactJS is a JavaScript library built by a group of engineers at Facebook and Instagram for building user interfaces for web and mobile apps. <a href="http://www.facebook.github.io/react" target="_blank" rel="nofollow noopener">Read the Docs</a><br />
                        ReactJS is often mentioned in the same breath as other Javascript frameworks, but “React vs Angular” doesn’t make sense because they aren’t directly comparable things. Angular is a complete framework (including a view layer), React is not. This is why React is so confusing to understand, it’s emerging in an ecosystem of complete frameworks, but it’s just the view.
                    </p>
                    <p>ReactJS gives you a template language and some function hooks to essentially render HTML. See React as HTML inside Javascript which brought about JSX(Javascript XML) we’ll discuss more on that later.<br />
                        ReactJS allows us to create reusable UI components and its also very easy to test. It is currently one of the most popular JavaScript libraries and has often led the field in performance and adoption of new design patterns.<br />
                        Let’s discuss this concept</p>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="container">
                <div className="intro-image text-center">
                    <img src="../assets/images/banner_6401.jpg" style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="spacer"></div>
                <div className="intro-content">
                    <p>As you can see, the component approach means that both HTML and JavaScript code live in the same file. React’s secret weapon to achieve this unholy alliance is the <a href="https://facebook.github.io/react/docs/jsx-in-depth.html" target="_blank" rel="nofollow noopener">JSX language</a>(where “X” stands for “XML”).<br />
                        JSX might seem awkward at first, but you get used to it pretty fast.<br />
                        Yes, I know. We’ve all been taught to maintain a strong separation between HTML and JavaScript. But it turns out that relaxing these rules a bit can actually do wonders for your front-end productivity.<br />
                        For example, since you now have the full power of JavaScript at your disposal, here’s how you can display the current time by inserting a snippet of JavaScript in your HTML using <code>{code}</code></p>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="container">
                <div className="intro-image text-center">
                    <img src="../assets/images/banner_6402.jpg" style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="spacer"></div>
                <div className="intro-content">
                    <p>Redux provides an easy way to centralize the state of your application.</p>
                    <p className="ui_qtext_para">First of all, Redux is <i>hard</i> to <b>initially</b> grasp.&nbsp; It has that sort of difficulty curve that spikes straight up.&nbsp; The upside to this, however, is that after that initial spike, you'll find that it drops off linearly.&nbsp; I never had so many 'Ah-ha!' moments learning a framework as I did with Redux.</p>
                    <p className="ui_qtext_para">The strength behind Redux is React.&nbsp; Given a set of configuring data, React can effortlessly change the visible DOM from one state to another.&nbsp; Redux builds upon this by being a predictable state container.&nbsp; That is, it provides reasonable and predictable ways of maintaining your applications state in one place and making tweaks to it.&nbsp; When you pair this with React, you get an application where you can glance at your data, glance at your views, make one change to your data, and have a reasonable suspicion about how your views will update.</p>
                    <div className="spacer"></div>
                    <img src="https://qph.ec.quoracdn.net/main-qimg-7d8ffaf7f4cd643283fbbd917dfbaa04" style={{ width: "100%", height: "100%" }} />
                </div>
            </div>
        </div>
    );

}