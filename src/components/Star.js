import React, { Component } from 'react';
import ReactStars from 'react-stars'
import {app} from "../firebase/firebase";

const rchange = (value) => {
    console.log(value)
    const rootstarr = app.database().ref().child('app').child('panel').child('items').child('star');
    rootstarr.push().set(value);
}

class Star extends Component {
    constructor(){
        super();
        this.state = {
            rate:0,
            orate:[],
            i:0

        };
    }

    componentDidMount() {
        const rootstar = app.database().ref().child('app').child('panel').child('items').child('star');


        rootstar.on('child_added', snap => {

            this.state.i +=1 ;
            this.state.rate += snap.val();
            this.setState({    });
        });

    }

    render() {
        console.log(this.state.i);
        console.log(this.state.rate);
return(

<ReactStars className="star"
    count={5}
    size={30}
    value={this.state.rate}
    color2={'#ffd700'}
    color1={'black'}
    half={false}
    onChange={rchange}
/>

);
}
}

export default Star;