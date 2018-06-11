import React, { Component } from 'react';
import ReactStars from 'react-stars'
import {app} from "../firebase/firebase";

const rchange = (value) => {
    console.log(value)
    const rootstarr = app.database().ref().child('app').child('panel').child('items').child('star');
    rootstarr.push().set(value);
    alert( "Your Rating is saved");
}

class Star extends Component {
    constructor(){
        super();
        this.state = {
            orate:0
        };
    }

    componentDidMount() {
        const rootstar = app.database().ref().child('app').child('panel').child('items').child('star');

        var i=0;
        var rate=0;
        var orate=0;
        rootstar.on('child_added', snap  => {
            i +=1 ;
            rate += snap.val();
            orate=rate/i;
                this.setState({
                    orate: orate
                });
        });

    }

    render() {

return(

<ReactStars className="star"
    count={5}
    size={30}
    value={this.state.orate}
    color2={'#ffd700'}
    color1={'black'}
    half={false}
    onChange={rchange}
/>

);
}
}

export default Star;