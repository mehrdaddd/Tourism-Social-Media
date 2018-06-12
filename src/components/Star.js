import React, { Component } from 'react';
import ReactStars from 'react-stars'
import {app} from "../firebase/firebase";

// database
/*
const rootstar = app.database().ref().child('app').child('panel').child('items').child('star');

var i=0;
var rate=0;
var orate=0;
rootstar.on('child_added', snap  => {
    i +=1 ;
    rate += snap.val();
    orate=rate/i;
});

//rating
const rchange = (value) => {
    rootstar.push().set(value);
    alert( "Your Rating is saved");

}
*/
// main component-




class Star extends Component {
    constructor(props){
        super(props);
        this.state = {
           // orate: orate,
            star:[],
            i:0
        };
    }

  componentDidMount() {
        const rootstar = app.database().ref().child('app').child('panel');
             var i=0;
             var star=[];
                rootstar.on('child_added', snap  => {
                    star[i]= snap.child('star').val();
                    i +=1 ;
                    this.setState({
                        star: star,
                        });
                });

    }

    render() {

return(

    <div>
    <h1>{this.state.star}</h1>
<ReactStars className="star"
    count={5}
    size={30}
    value={this.props.value}
    color2={'#ffd700'}
    color1={'black'}
    half={false}
    // onChange={rchange}
/>
    </div>
);
}
}

export default Star;