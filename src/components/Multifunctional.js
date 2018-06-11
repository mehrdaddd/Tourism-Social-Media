import React, {Component} from 'react';
import './App.css';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Star from './Star';
import Commentt from "./Commentt";
import {app } from '../firebase/firebase';

class Multifunctional  extends Component {
        constructor(){
            super();
            this.state = {
                head: "1",
                body: "1",
                name: "1",
                name2: "1",
                name3: "1",
                name4: "1",
                text: "1",
                text2: "1",
                text3: "1",
                text4: "1"
            };
        }

        componentDidMount() {
            const roothead = app.database().ref().child('app').child('panel');

            roothead.on('value', snap => {
                this.setState({
                    head: snap.child('head').val(),
                    body: snap.child('body').val(),
                    name: snap.child('items').child('name').val(),
                    name2: snap.child('items2').child('name').val(),
                    name3: snap.child('items3').child('name').val(),
                    name4: snap.child('items4').child('name').val(),
                    text: snap.child('items').child('text').val(),
                    text2: snap.child('items2').child('text').val(),
                    text3: snap.child('items3').child('text').val(),
                    text4: snap.child('items4').child('text').val()

                });
            });
        }
    render() {
        return (
            <Panel className="table">

                <Panel.Heading><h1>{this.state.head} </h1></Panel.Heading>
                <Panel.Body>{this.state.body}   </Panel.Body>
                <ListGroup>

                        <ListGroupItem> <a className="items" href="https://www.expedia.com"> {this.state.name} </a>
                            <p>{this.state.text}</p>
                            <Star/>
                            <Commentt/>
                        </ListGroupItem>

                        <ListGroupItem> <a className="items" href="https://www.Booking.com">{this.state.name2}</a>
                            <p>{this.state.text2} </p>
                            <Star/>
                            <Commentt/>
                        </ListGroupItem>


                        <ListGroupItem> <a className="items" href="https://www.tripadvisor.com">{this.state.name3} </a>
                            <p>{this.state.text3}</p>
                            <Star/>
                            <Commentt/>
                        </ListGroupItem>

                        <ListGroupItem> <a className="items" href="https://www.kayak.com/"> {this.state.name4}</a>
                            <p> {this.state.text4} </p>
                            <Star/>
                            <Commentt/>
                        </ListGroupItem>

                        <ListGroupItem>&hellip;</ListGroupItem>

                </ListGroup>
             </Panel>
        );
    }
}

export default Multifunctional ;

