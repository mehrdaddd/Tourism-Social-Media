import React, {Component} from 'react';
import './App.css';
import {Panel, ListGroupItem} from 'react-bootstrap';
import Star from './Star';
import Commentt from "./Commentt";
import {app } from '../firebase/firebase';

// todo: fix mainroot
//main root
const mainroot = app.database().ref().child('app').child('panels');
var headd;
var bodyy;
mainroot.on('value', sn => {
    headd=  sn.child('head').val();
    bodyy =  sn.child('body').val();
})

// component
class Multifunctionall  extends Component {

    constructor(props){
        super(props);
        this.root = app.database().ref().child('app').child('panels').child('items');
        this.state = {
            headd : headd,
            bodyy: bodyy,
            panels:[]
        };
        this.rchange= this.rchange.bind(this);
    }


    componentWillMount() {
        const  ppanels=this.state.panels ;
        this.root.on('child_added', snap => {
            const rom = app.database().ref().child('app').child('panels').child('items').child(snap.key).child('rate');

            var i=0;
            var rate=0;
            var orate=0;
            rom.on('child_added', sneep =>{
                i +=1 ;
                rate += sneep.val();
            })
            orate = rate/i;

            ppanels.push({
                id:snap.key,
                name:snap.child('name').val(),
                link:snap.child('link').val(),
                text:snap.child('text').val(),
                star: orate

            });

            this.setState({
                panels: ppanels
            });
        });
    }

    //
    rchange = (id, value) => {
        // rootstar.push().set(value);
        const rootstar = app.database().ref().child('app').child('panels').child('items');
        rootstar.child(id).child('rate').push().set(value);
        alert( "Your Rating is saved " + id);
    }

    //

    render() {

        return (
            <Panel className="table">


                <Panel.Heading><h1>{this.state.headd} </h1></Panel.Heading>
                <Panel.Body>{this.state.bodyy} </Panel.Body>
                {this.state.panels.map((panel) =>{

                    return(
                        <div key={panel.id}>
                            <ListGroupItem> <a className="items" href={panel.link}> {panel.name} </a>
                                <p>{panel.text}</p>

                                <Star value={panel.star}  onChange={(v) => this.rchange(panel.id,v)} />


                                <Commentt/>
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