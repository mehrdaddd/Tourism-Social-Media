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
                head: "1"
            };
        }
        componentDidMount() {
            const rootRef = app.database().ref().child('app');
            const rootStar = rootRef.child('panel');
            rootStar.on('value', snap => {
                this.setState({
                    head: snap.val()
                });

            });
        }
    render() {
        return (
            <Panel className="table">
                <h1> {this.state.head}</h1>
                <Panel.Heading><h1>Multifunctional </h1></Panel.Heading>
                <Panel.Body>Introduce websites that has provided variety of services</Panel.Body>
                <ListGroup>
                        <ListGroupItem> <a className="items" href="https://www.expedia.com"> Expedia </a>

                            <p>Expedia is a travel booking website owned by Expedia Group. The website can be
                                used
                                to book airline tickets, hotel reservations, car rentals, cruises and vacation
                                packages.</p>
                            <Star/>
                            <Commentt/>
                        </ListGroupItem>

                        <ListGroupItem> <a className="items" href="https://www.Booking.com"> Booking </a>
                            <p>Booking is a travel meta search engine for lodging reservations for
                                Accommodation, Flight, Taxi and Restaurant. </p>
                            <Star/>

                            <Commentt/>
                        </ListGroupItem>


                        <ListGroupItem> <a className="items"
                                           href="https://www.tripadvisor.com"> Tripadvisor </a>
                            <p>TripAdvisor is a we travel website company providing hotel and restaurant
                                reviews,
                                accommodation bookings and other travel-related content. It also includes
                                interactive travel forums.</p>
                            <Star/>
                            <Commentt/>
                        </ListGroupItem>
                        <ListGroupItem> <a className="items" href="https://www.kayak.com/"> Kayak</a>
                            <p> Search hundreds of travel sites at once. </p>
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

