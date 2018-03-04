import * as React from 'react';
import { Progress } from 'reactstrap';

interface Props {
    techs: string[]
}

export default class Loader extends React.Component<Props, {}> {
    render() {

        return (
            <div style={{ marginBottom: 30, padding: 5 }}>
                <h2>Responsive Loader</h2>
                <div className="text-center">25%</div>
                <Progress value="25" />
            </div>
        );
    }
}