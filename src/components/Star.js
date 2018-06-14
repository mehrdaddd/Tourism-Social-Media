import React, { Component } from 'react';
import ReactStars from 'react-stars'
import {app} from "../firebase/firebase";


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

    render() {

        return(

            <div>

                <ReactStars className="star"
                            count={5}
                            size={30}
                            value={this.props.value}
                            color2={'#ffd700'}
                            color1={'black'}
                            half={false}
                            onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default Star;