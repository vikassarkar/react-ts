

const Subscriber = (Store:any) => {
    return () => {
        //const { application } = store.getState();
        console.log(Store.getState())
        // switch (application.status) {
        //     case ApplicationStatus.Uninitialized:
        // }
    }
}

export default Subscriber;