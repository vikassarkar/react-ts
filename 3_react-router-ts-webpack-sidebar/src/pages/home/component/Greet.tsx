import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../../../assets/images/logo.png';

interface Props {
    techs?: string[];
    headerTitle?: string;
    match?: any;
}

export default class Greet extends React.Component<Props, {}> {
    render() {
        const { match } = this.props;
        const techs = this.props.techs.map((tech, i) => {
            return <ListGroupItem key={i} color="info">{tech}</ListGroupItem>
        });
        console.log(match);

        return (
            <div className="widget">
                <div className=" row btn-primary no-gutters" style={{ alignItems: 'center' }}>
                    <div className="col-3">
                        <img src={"./assets/images/logo.png"} style={{ width: "50%" }} />
                    </div>
                    <div className="col-9">
                        <h2>{this.props.headerTitle}</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1> Welcome to our awesome <i className="fab fa-react"></i>React Typescript app</h1>
                            <h2>This app has been built using below Awsome person </h2>
                            <ListGroup>{techs}</ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}