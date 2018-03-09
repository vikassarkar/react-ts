import * as React from 'react';
import '../../../../assets/images/logo.png';
import { Button } from 'reactstrap';

interface Props {
    headerTitle?: string;
    toggleMenu?: any;
    closeMenu?:any;
}

export default class Header extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <div className="widget">
                <div className=" row btn-primary no-gutters" style={{ alignItems: 'center' }}>
                    <div className="col-1 text-center" >
                        <Button onClick={this.props.toggleMenu}>
                            <i className="fas fa-bars" style={{ cursor: "pointer" }} ></i>
                        </Button>
                    </div>
                    <div className="col-11" onClick={this.props.closeMenu}>
                        <div className="row no-gutters">
                            <div className="col-2 text-center" style={{ paddingTop: "5px", display: "flex" }}>
                                <img src={"./assets/images/logo.png"} style={{ alignSelf: "center", width: "7rem", height: "4rem" }} />
                            </div>
                            <div className="col-10" style={{ display: "flex" }}>
                                <div className="col-10 text-center" style={{ alignSelf: "center" }}>
                                    <h2>{this.props.headerTitle}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}