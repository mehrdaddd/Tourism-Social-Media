import React, { Component } from 'react';
import ReactStars from 'react-stars'
import {app } from '../firebase/firebase';



class Star extends Component {
    constructor(){
        super();
        this.state = {
            rate:1
        };
    }

    
    render() {

return(

<ReactStars className="star"
    count={5}
    size={30}
    value={2}
    color2={'#ffd700'}
    color1={'black'}
    half={false}
/>

);
}
}

export default Star;