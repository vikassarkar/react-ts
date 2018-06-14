import * as React from 'react';
import { Link } from 'react-router-dom';

export const ParallaxBanner = () => {

    return (
        <div className="banner-container">

            <section className="bar background-image-fixed-2 no-mb color-white text-center">
                <div className="dark-mask"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="lead">Here is an amazing example of end-to-end usage of React and Redux </h3>
                            <h2 className="text-uppercase newsletter">Click menu to redirect</h2>
                            <h3 className="lead">or</h3>
                        </div>

                        <div className="col-md-12">
                            <div id="mc_embed_signup">
                                <div className="demo-text">
                                    <span className="text-center bg-text">Click view for demo</span>
                                </div>
                                <div>
                                    <Link to={'/users'} replace className="btn btn-template-transparent-black btn-lg">
                                        View Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );

}