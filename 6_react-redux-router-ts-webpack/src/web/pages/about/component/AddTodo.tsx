import * as React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";

import { storeInitiate } from "../../../reduxStore/action/ReduxActions";

interface Props {
    storeInitiateAction: Function;
    TodoReducer: any;
    FilterReducer:any;
}
interface State {
    todoInput: string;
}

class AddTodoHandler extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            todoInput: ""
        };
        this.addItem = this.addItem.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }
    updateInput(event: any) {
        this.setState({ todoInput: event.target.value })
    }
    addItem() {
        console.log(this.props.TodoReducer);
        this.props.storeInitiateAction(false);
        alert("you need to add : " + this.state.todoInput);
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

const AddTodo = connect(
    (state: any) => {
        return { TodoReducer: state['TodoReducer'], FilterReducer: state['FilterReducer'] };
    }, // Map store state to props
    (dispatch:any) => {
        return {
            storeInitiateAction: (initiate: boolean) => {
                dispatch(storeInitiate(initiate));
            }
        };// Map store actions to props
    })(AddTodoHandler);

export default AddTodo;