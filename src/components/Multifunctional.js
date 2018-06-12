import React, {Component} from 'react';
import './App.css';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
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
class Multifunctional  extends Component {
        constructor(props){
            super(props);
            this.state = {
                head:0,
                body:0,
                name: 0,
                name2: 0,
                name3: 0,
                name4: 0,
                text: 0,
                text2:0,
                text3:0,
                text4:0,
                star:0,
                star2: 0,
                star3: 0,
                star4: 0
            };
        }


    componentWillMount() {
        const rootstar = app.database().ref().child('app').child('panel');
        rootstar.on('value', snap => {
            this.setState({
            star: snap.child('items').child('star').val(),
            star2: snap.child('items2').child('star').val(),
            star3: snap.child('items3').child('star').val(),
            star4: snap.child('items4').child('star').val(),
            head:    snap.child('head').val(),
            body:   snap.child('body').val(),
            name:   snap.child('items').child('name').val(),
            name2: snap.child('items2').child('name').val(),
            name3: snap.child('items3').child('name').val(),
            name4: snap.child('items4').child('name').val(),
            text: snap.child('items').child('text').val(),
            text2 :snap.child('items2').child('text').val(),
            text3: snap.child('items3').child('text').val(),
            text4: snap.child('items4').child('text').val(),
            link: snap.child('items').child('link').val(),
            link2: snap.child('items2').child('link2').val(),
            link3: snap.child('items3').child('link3').val(),
            link4: snap.child('items4').child('link4').val()
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

                <Panel.Heading><h1>{this.state.head} </h1></Panel.Heading>
                <Panel.Body>{this.state.body}   </Panel.Body>
                <ListGroup>

                        <ListGroupItem> <a className="items" href={this.state.link}> {this.state.name} </a>
                            <p>{this.state.text}</p>
                            <Star value={this.state.star} />
                            <Commentt/>
                        </ListGroupItem>

                        <ListGroupItem> <a className="items" href={this.state.link2}>{this.state.name2}</a>
                            <p>{this.state.text2} </p>
                            <Star  value={this.state.star2} />
                            <Commentt/>
                        </ListGroupItem>


                        <ListGroupItem> <a className="items" href={this.state.link3}>{this.state.name3} </a>
                            <p>{this.state.text3}</p>
                            <Star value={this.state.star3}/>
                            <Commentt/>
                        </ListGroupItem>

                        <ListGroupItem> <a className="items" href={this.state.link4}> {this.state.name4}</a>
                            <p> {this.state.text4} </p>
                            <Star value={this.state.star4}/>
                            <Commentt/>
                        </ListGroupItem>

                        <ListGroupItem>&hellip;</ListGroupItem>

                </ListGroup>
             </Panel>
        );
    }
}

export default Multifunctional ;

