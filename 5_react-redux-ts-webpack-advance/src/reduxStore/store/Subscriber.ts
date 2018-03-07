

const Subscriber = (Store: any) => {
    return () => {
        console.log(Store.getState())
        const { FilterReducer } = Store.getState();
        console.log(FilterReducer)
        // switch (application.status) {
        //     case ApplicationStatus.Uninitialized:
        // }
    }
}

export default Subscriber;