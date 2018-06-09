import React, {Component} from 'react';
import * as firebase from 'firebase' ;




class Componentt extends Component {
    constructor(){
        super();
        this.state = {
            speed:10
        };
    }



    componentDidMount() {
        const rootRef = firebase.database().ref().child('justgo');
        const speedRef = rootRef.child('speed');
        speedRef.on('value', snap => {
            this.setState({
                speed: snap.val()
            });
        });
    }

    render() {

        return (
            <div >
                Hi
                <h1> {this.state.speed}</h1>
            </div>
        );
    }
}

export default Componentt;

