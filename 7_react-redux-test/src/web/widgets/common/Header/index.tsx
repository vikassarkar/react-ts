import * as React from 'react';
import { Button } from 'reactstrap';

interface Props {
    headerTitle?: string;
    toggleMenu?: any;
    closeMenu?: any;
}

export default class Header extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="widget widget-header">
                <div className=" row no-gutters" style={{ alignItems: 'center' }}>
                    <div className="col-1 text-center" >
                        <Button onClick={this.props.toggleMenu}>
                            <i className="fas fa-bars" style={{ cursor: "pointer" }} ></i>
                        </Button>
                    </div>
                    <div className="col-10 text-center" onClick={this.props.closeMenu} style={{ alignSelf: "center" }}>
                        <h2>{this.props.headerTitle}</h2>
                    </div>
                </div>
            </div>
        );
    }
}