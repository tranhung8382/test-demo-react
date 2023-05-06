//class component
//function component
import React from "react";

class MyComponent extends React.Component {


    state = {
        name: 'Hung Tran',
        address: '30 Van Bao',
        age: 41
    };
    //jsx
    render() {
        return (
            <div>my first component

                My name iss {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;