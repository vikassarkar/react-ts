

const Subscriber = (Store: any) => {
    return () => {
        console.log(Store.getState())
        const { allUserDataReducer } = Store.getState();
        console.log(allUserDataReducer)
        // switch (application.status) {
        //     case ApplicationStatus.Uninitialized:
        // }
    }
}

export default Subscriber;