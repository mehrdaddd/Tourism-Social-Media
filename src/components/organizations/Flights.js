import React, {Component} from 'react';
import '../App.css';
import {Panel, ListGroupItem} from 'react-bootstrap';
import Star from '../Star';
import Commentt from "../Commentt";
import {app } from '../../firebase/firebase';

//main root
const mainroot = app.database().ref().child('app').child('panels').child('flights');
var headd;
var bodyy;
mainroot.on('value', sn => {
    headd=   sn.child('head').val();
    bodyy =  sn.child('body').val();
})

// component
class Multifunctionall  extends Component {

    constructor(props){
        super(props);
        this.mainroot= app.database().ref().child('app').child('panels').child('flights');
        this.root = app.database().ref().child('app').child('panels').child('flights').child('items');
        this.state = {
            headd : headd,
            bodyy: bodyy,
            flights:[],
        };
        this.rchange= this.rchange.bind(this);
    }

    // database interaction with star comment cmponent
    componentWillMount() {
        const  pflights=this.state.flights ;

        this.mainroot.on('value', s => {
                this.setState({
                    headd: s.child('head').val(),
                    bodyy: s.child('body').val(),
                });
            }
        )
        this.root.on('child_added', snap => {

            //comment
            const comm = app.database().ref().child('app').child('panels').child('flights').child('items').child(snap.key).child('comment group');
            const revise=[] ;
            comm.on('child_added', snepp => {
                revise.push({
                    id:    snepp.key,
                    name:  snepp.child('name').val(),
                    date:  snepp.child('date').val(),
                    text:  snepp.child('text').val()
                })

            });

            // star
            const rom = app.database().ref().child('app').child('panels').child('flights').child('items').child(snap.key).child('rate');
            var i=0;
            var rate=0;
            var orate=0;
            rom.on('child_added', sneep =>{
                i +=1 ;
                rate += sneep.val();
            })
            orate = rate/i;

            // main component
            pflights.push({
                id:snap.key,
                revises:  revise,
                name:snap.child('name').val(),
                link:snap.child('link').val(),
                text:snap.child('text').val(),
                star: orate

            })

            pflights.sort(function (b, a) {
                return a.star - b.star;
            });
            this.setState({
                flights: pflights
            });
        });
    }

    // enter for comment
    rchange = (id, value) => {
        const rootstar = app.database().ref().child('app').child('panels').child('flights').child('items');
        rootstar.child(id).child('rate').push().set(value);
        alert( "Your Rating is saved " + id);
        this.forceUpdate();
    }

    render() {

        return (
            <Panel className="table">


                <Panel.Heading><h1>{this.state.headd} </h1></Panel.Heading>
                <Panel.Body>{this.state.bodyy} </Panel.Body>

                {this.state.flights.map((panel) =>{

                    return(
                        <div key={panel.id}>
                            <ListGroupItem> <a className="items" href={panel.link}> {panel.name} </a>

                                <p>{panel.text}</p>

                                <Star value={panel.star}  onChange={(v) => this.rchange(panel.id,v)} />


                                <Commentt onPressEnterr={panel.id} lm={panel.revises} addr={"flights"} panel={"panels"} />


                            </ListGroupItem>

                            <ListGroupItem>&hellip;</ListGroupItem>
                        </div>
                    )
                })}

            </Panel>
        );
    }
}

export default Multifunctionall ;