import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Loader from './component/Loader';
import Greet from './component/Greet';

export const Contact = (props:any) => {
    const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap', 'Fontawsome'];
    const title = "CONTACT routing-react-ts-webpack";
    let {match} = props;
    return (
        <div>
        <Greet techs={techStack} headerTitle={title} {...props}/>
        <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul>
                                <li><Link to={`${match.url}/loader`}>Loader</Link></li>
                            </ul>
                            {/* if   path={`${match.url}/:loader?`}  then component define will load by default without even clicking link*/}
                            <Route path={`${match.url}/:loader`} component={Loader} />
                        </div>
                    </div>
                </div>
        </div>
    )
}