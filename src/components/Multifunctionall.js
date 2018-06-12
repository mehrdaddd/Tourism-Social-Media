import React, {Component} from 'react';
import './App.css';
import {Panel, ListGroupItem} from 'react-bootstrap';
import Star from './Star';
import Commentt from "./Commentt";
import {app } from '../firebase/firebase';


class Multifunctionall  extends Component {


    constructor(props){
       super(props);
       this.root = app.database().ref().child('app').child('panels').child('items');
       // const rootstar = app.database().ref().child('app').child('panels').child('items').child('item2').child('star');
        this.state = {
       panels:[]
        };
       // this.rchange= this.rchange.bind(this);
    }

    /*
    this.rchange = (value) => {
        rootstar.push().set(value);
        alert( "Your Rating is saved");
    }
*/
    componentWillMount() {
        const  ppanels=this.state.panels ;
        this.root.on('child_added', snap => {
            ppanels.push({
                id:snap.key,
                name:snap.child('name').val(),
                link:snap.child('link').val(),
                text:snap.child('text').val(),
                star:snap.child('star').val()
            })
            this.setState({
                panels: ppanels
            });
        });
    }

    render() {

        return (
            <Panel className="table">
                {this.state.panels.map((panel) =>{
                    return(
                            <div key={panel.id}>
                                <Panel.Heading><h1>{this.state.head} </h1></Panel.Heading>
                                <Panel.Body>{this.state.body}   </Panel.Body>

                                <ListGroupItem> <a className="items" href={panel.link}> {panel.name} </a>
                                    <p>{panel.text}</p>
                                    <Star value={panel.star}   />
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

