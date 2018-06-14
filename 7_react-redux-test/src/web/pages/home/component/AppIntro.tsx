import * as React from 'react';


export const AppIntro = (props: any) => {
    const techs = props.techs.map((tech: any, i: any) => {
        return <div key={i} className={"col-6 tech-lang lang-"+tech}><div className="col-11">{tech}</div></div>
    });

    return (
        <div className="app-intro-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1> Welcome to React<i className="fab fa-react"></i>Redux world </h1>
                        <h2>Buiild with supream technologies </h2>
                        <h2><strong>"React Redux Typescript"</strong></h2>
                        <h3>This app contains solution for redux in react applications</h3>
                    </div>
                    <div className="col-12 text-center">
                        <div className="row">
                            {techs}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}