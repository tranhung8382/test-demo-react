import React from "react";


class UserInfor extends React.Component {

    state = {
        name: 'Hung Tran',
        address: '30 Van Bao',
        age: 41
    };





    // // handleClick(event) Viết theo arrow function ở dưới
    // handleClick = (event) => {
    //     // console.log("Click me my button")
    //     //console.log(event)

    //     console.log("My name is", this.state.name);


    //     //merge State => react class
    //     this.setState({
    //         name: 'Lucky Duke',
    //         age: Math.floor((Math.random() * 100 + 1))
    //     })
    // }

    // handleOnMouseOver(event) {
    //     console.log(event.pageX)
    // }

    handleOnChangeInput = (event) => {
        // console.log(event, event.target.value)
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        // console.log(event, event.target.value)
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()  //không refresh lại trang, không trả lại trang ban đầu
        // alert('me')
        console.log(this.state)
    }



    render() {
        return (
            <div>My name iss {this.state.name} and I'm from {this.state.address} and I'm {this.state.age}

                {/* <button onMouseOver={this.handleOnMouseOver}>Hover Me</button>
            <button onClick={this.handleClick}>Click Me</button> */}
                {/* nếu ở trên vẫn viết theo hàm kiểu này handleClick(event) 
               chúng ta có thể viết arrow function lúc gọi như sau:
               <button onClick = {(event) => {this.handleClick(event)}}=>Click Me</button>
            */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Name</label>
                    <input type="text" onChange={(event) => this.handleOnChangeInput(event)} />

                    <label>Your Age</label>
                    <input type="text" onChange={(event) => this.handleOnChangeAge(event)} />
                    <button>Submit</button>
                </form></div>
        )
    }


}

export default UserInfor;