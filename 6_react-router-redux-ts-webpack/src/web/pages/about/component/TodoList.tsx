import * as React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';


interface Props {
}
interface State {
}

export default class TodoList extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
    }
    toggleTodo(event: any) {
        alert(event.target)
    }
    render() {
        return (
            <div className="todoList mb-5">
                <ListGroup>
                    <ListGroupItem>
                        Cras justo odio
                        <Button className="float-right" onClick={this.toggleTodo}>X</Button>
                    </ListGroupItem>
                    <ListGroupItem>
                        Dapibus ac facilisis in
                        <Button className="float-right" onClick={this.toggleTodo}>X</Button>
                    </ListGroupItem>
                    <ListGroupItem>
                        Morbi leo risus
                        <Button className="float-right" onClick={this.toggleTodo}>X</Button>
                    </ListGroupItem>
                    <ListGroupItem>
                        Porta ac consectetur ac
                        <Button className="float-right" onClick={this.toggleTodo}>X</Button>
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}