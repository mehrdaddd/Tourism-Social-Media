import React, {Component} from 'react';
import './App.css';
import {Panel, ListGroupItem} from 'react-bootstrap';
import Star from './Star';
import Commentt from "./Commentt";
import {app } from '../firebase/firebase';

//database
/*
const roothead = app.database().ref().child('app').child('panel');
const head=[];
const body=[];
const name=[];
const text=[];
roothead.on('value', snap => {

        head[0]= snap.child('head').val();
        body[0]=snap.child('body').val();
        name[0]= snap.child('items').child('name').val();
        name[2]= snap.child('items2').child('name').val();
        name[3]= snap.child('items3').child('name').val();
        name[4]= snap.child('items4').child('name').val();
        text[0]= snap.child('items').child('text').val();
        text[2]= snap.child('items2').child('text').val();
        text[3]= snap.child('items3').child('text').val();
        text[4]= snap.child('items4').child('text').val();
});

console.log(head[0]);
*/
class Multifunctionall  extends Component {


    constructor(props){
       super(props);
       this.rootstar = app.database().ref().child('app').child('panels').child('items');
        this.state = {
       panels:[]
        };
    }
    componentWillMount() {
        const  ppanels=this.state.panels ;
        this.rootstar.on('child_added', snap => {
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
    /*      componentDidMount() {
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
          */
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
                                    <Star value={panel.star} />
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

