import React, {Component} from 'react';
import {app } from '../firebase/firebase';

var firebaseRef= app.database().ref();
firebaseRef.child("Text").set("some value");


class Componentt extends Component {
    constructor(){
        super();
        this.state = {
            rate:1
    };
    }

    componentDidMount() {
        const rootRef = app.database().ref().child('star');
        const rootStar = rootRef.child('Expedia');
        rootStar.on('value', snap => {
            this.setState({
                rate: snap.val()
            });
        });
    }

    render() {

        return (
            <div >
                Hi
                <h1> {this.state.rate}</h1>
            </div>
        );
    }
}

export default Componentt;

