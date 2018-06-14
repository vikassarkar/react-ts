import * as React from 'react';
import { connect } from "react-redux";
import { CardBlock } from "./component/CardBlock";
import { FormLightbox } from "./component/FormLightbox";
import { storeCreated, userPageLoaded, lightboxTrigger, setUserData, setLightBoxData } from "../../reduxStore/action/ReduxActions";
interface Props {
    storeCreatedAction?: Function;
    userPageLoadedAction?: Function;
    lightboxTriggerAction?: Function;
    setUserDataAction?: Function;
    setLightBoxDataAction?: Function;
    allUserData?: any;
    lightboxUserData?: any;
}
interface States {
    modalOpen?: boolean;
}

class UsersPage extends React.Component<Props, States> {
    constructor(props: any) {
        super(props);
        this.state = {
            modalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.saveData = this.saveData.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    toggleModal(event: any) {
        let dataId = event.target.id.split("_")[2];
        this.setState({ modalOpen: !this.state.modalOpen });
        this.props.lightboxTriggerAction(!this.state.modalOpen);
        this.props.setLightBoxDataAction(this.props.allUserData[parseInt(dataId) - 1]);
    }

    closeModal() {
        this.setState({ modalOpen: !this.state.modalOpen });
        this.props.lightboxTriggerAction(!this.state.modalOpen);
    }

    saveData() {
        let modalData = JSON.parse(JSON.stringify(this.props.lightboxUserData));
        let userData = JSON.parse(JSON.stringify(this.props.allUserData));
        let buttonId = parseInt(modalData.id)-1;
        userData[buttonId] = modalData;
        this.props.setUserDataAction(userData);
        this.closeModal();
    }

    changeInput(event: any) {
        let modalData = JSON.parse(JSON.stringify(this.props.lightboxUserData));
        let inputId = event.target.id.split("_");        
        if(inputId.length > 3){
            modalData[inputId[2]][inputId[3]] = event.target.value;
        }else{
            modalData[inputId[2]] = event.target.value;
        }
        this.props.setLightBoxDataAction(modalData);
    }

    componentWillMount() {
        fetch("../stabs/ReactTask.json")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json);
                this.props.setUserDataAction(json);
            });
    }

    componentDidMount() {
        this.props.userPageLoadedAction();
    }

    render() {
        let { allUserData, lightboxUserData } = this.props;
        return (
            <div className="users-container">
                <div className="container flex-box flex-wrap">
                    {allUserData && allUserData.length > 0 &&
                        allUserData.map((user: any, index: any) =>
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 card-container">
                                <div className="spacer"></div>
                                <CardBlock user={user} toggle={this.toggleModal} />
                            </div>
                        )
                    }
                </div>
                {this.state.modalOpen &&
                    <FormLightbox user={lightboxUserData} modalOpen={this.state.modalOpen} closeModal={this.closeModal} changeInput={this.changeInput} saveData={this.saveData} />
                }
            </div>
        )
    }
}


const Users = connect(
    (store: any) => {
        return {
            allUserData: store.allUserDataReducer["SET_USER_DATA"] && store.allUserDataReducer["SET_USER_DATA"]["payload"] ? store.allUserDataReducer["SET_USER_DATA"]["payload"] : [],
            lightboxUserData: store.userDataReducer["SET_LIGHTBOX_DATA"] && store.userDataReducer["SET_LIGHTBOX_DATA"]["payload"] ? store.userDataReducer["SET_LIGHTBOX_DATA"]["payload"] : null
        };
    }, 
    (dispatch: any) => {
        return {
            storeCreatedAction: () => {
                dispatch(storeCreated());
            },
            userPageLoadedAction: () => {
                dispatch(userPageLoaded());
            },
            lightboxTriggerAction: (data: any) => {
                dispatch(lightboxTrigger(data));
            },
            setUserDataAction: (data: any) => {
                dispatch(setUserData(data));
            },
            setLightBoxDataAction: (data: any) => {
                dispatch(setLightBoxData(data));
            }
        };
    })(UsersPage);

export default Users;