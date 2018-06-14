import * as React from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';

export const CardBlock = (props: any) => {
    let {user} = props;
    return (
        <div>
            <Card>
                <CardTitle className="card-header">{user.name}</CardTitle>
                <CardBody>
                    <div className="h6"><strong>{user.email}</strong></div>
                    <div className="h6">{user.address.city}</div>
                    <div className="h6">{user.phone}</div>
                    <div className="h6">{user.website}</div>
                    <div className="h6">{user.company.name}</div>
                </CardBody>                
                <Button id={"btn_uid_"+user.id} className="btn-test" onClick={props.toggle}>Button</Button>
            </Card>
        </div>
    )
}