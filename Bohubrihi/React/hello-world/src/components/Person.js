import React, { Component } from 'react';

let Person = (props) => {
    console.log(props);
    // for (let num = 0; num < 10; num++) {

    return (
        <div>
            <h1>I am {props.name}.</h1>
            <h1>Hello: {props.children}</h1>
        </div>

    )
    // }

}

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>I am {this.props.name}.</h1>
//                 <h1>Hello: {this.props.children}</h1>
//             </div>
//         )
//     }
// }


export default Person;