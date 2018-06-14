import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label } from 'reactstrap';

export const FormLightbox = (props: any) => {
    let {user} = props;
    return (
        <div>
            <Modal isOpen={props.modalOpen} toggle={props.closeModal}>
                <ModalHeader toggle={this.closeModal}>Update Data</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup >
                            <div className="row">
                                <div className="col-12 col-sm-4 text-sm-left">
                                    <Label for="inpt_uid_name" >Name</Label>
                                </div>
                                <div className="col-12  col-sm-8">
                                    <Input id="inpt_uid_name" value={user.name} onChange={props.changeInput}/>
                                    {/* <FormFeedback>You will not be able to see this</FormFeedback> */}
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row">
                                <div className="col-12 col-sm-4 text-sm-left">
                                    <Label for="inpt_uid_email">Email</Label>
                                </div>
                                <div className="col-12  col-sm-8">
                                    <Input id="inpt_uid_email" value={user.email} onChange={props.changeInput}/>
                                    {/* <FormFeedback>You will not be able to see this</FormFeedback> */}
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row">
                                <div className="col-12 col-sm-4 text-sm-left">
                                    <Label for="inpt_uid_address_city">City</Label>
                                </div>
                                <div className="col-12  col-sm-8">
                                    <Input id="inpt_uid_address_city" value={user.address.city} onChange={props.changeInput}/>
                                    {/* <FormFeedback>You will not be able to see this</FormFeedback> */}
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row">
                                <div className="col-12 col-sm-4 text-sm-left">
                                    <Label for="inpt_uid_phone">Phone</Label>
                                </div>
                                <div className="col-12  col-sm-8">
                                    <Input id="inpt_uid_phone" value={user.phone} onChange={props.changeInput}/>
                                    {/* <FormFeedback>You will not be able to see this</FormFeedback> */}
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row">
                                <div className="col-12 col-sm-4 text-sm-left">
                                    <Label for="inpt_uid_website">Website</Label>
                                </div>
                                <div className="col-12  col-sm-8">
                                    <Input id="inpt_uid_website" value={user.website} onChange={props.changeInput}/>
                                    {/* <FormFeedback>You will not be able to see this</FormFeedback> */}
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row">
                                <div className="col-12 col-sm-4 text-sm-left">
                                    <Label for="inpt_uid_company_name">Company Name</Label>
                                </div>
                                <div className="col-12  col-sm-8">
                                    <Input id="inpt_uid_company_name" value={user.company.name} onChange={props.changeInput}/>
                                    {/* <FormFeedback>You will not be able to see this</FormFeedback> */}
                                </div>
                            </div>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="col-6 col-sm-6 btn-test" color="secondary" onClick={props.saveData}>Save</Button>
                    <Button className="col-6 col-sm-6 btn-test" color="secondary" onClick={props.closeModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}