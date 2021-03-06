import * as React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

interface Props {
}
interface State {
    todoInput: string;
}

export default class AddTodo extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state={
            todoInput:""
        };
        this.addItem = this.addItem.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }
    updateInput(event:any){
        this.setState({todoInput: event.target.value})
    }
    addItem() {
        alert("you need to add : "+this.state.todoInput);
    }
    render() {
        return (
            <div className="addTodo mb-5">
                <div className="row">
                    <Form inline className="col-12 no-gutters">
                        <FormGroup className="col-12 col-sm-8">
                            <Label for="exampleEmail" className="col-12 col-sm-3">TODO</Label>
                            <Input type="email" name="email" onChange={this.updateInput} className="col-12 col-sm-9" id="exampleEmail" placeholder="Add your todo list" />
                        </FormGroup>
                        <div className="col-12 col-sm-4">
                            <Button onClick={this.addItem} className="col-12 col-sm-8 float-right">Add</Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}