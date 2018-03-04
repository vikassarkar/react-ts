import * as React from 'react';
import { ListGroup, ListGroupItem, Table } from 'reactstrap';
import { Link, Route } from 'react-router-dom';
const logo = require('../../../assets/images/logo.png');

interface Props {
    techs: string[];
    headerTitle: string;
    match?: any;
}

export default class Greet extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props);

    }
    getResponsiveTable() {
        // getResponsiveTable(props:any) { you can get props here
        return (
            <div style={{ marginBottom: 30, padding: 5 }}>
                <h2>Responsive Table</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
    render() {
        const techs = this.props.techs.map((tech, i) => {
            return <ListGroupItem key={i} color="info">{tech}</ListGroupItem>
        })
        let { match } = this.props;

        return (
            <div className="widget">
                <div className=" row btn-primary no-gutters" style={{ alignItems: 'center' }}>
                    <div className="col-3">
                        <img src={logo} style={{ width: "50%" }} />
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

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul>
                                <li><Link to={`${match.url}/loader/table`}>Table</Link></li>
                            </ul>
                            {/* if   path={`${match.url}/:loader?/:table?`}  then component define will load by default without even clicking link*/}
                            <Route path={`${match.url}/:loader/:table`} render={this.getResponsiveTable} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}