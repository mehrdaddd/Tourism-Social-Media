import React, { Component } from 'react';
import ReactStars from 'react-stars'

class Star extends Component {
    render() {


return(

<ReactStars className="star"
    count={5}
    size={30}
    value={3}
    color2={'#ffd700'}
    color1={'black'}
    half={false}
/>


);
}
}
export default Star;