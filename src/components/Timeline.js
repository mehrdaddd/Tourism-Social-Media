import React, {Component} from 'react';
import './App.css';
import {Panel, ListGroupItem} from 'react-bootstrap';
import Star from './Star';
import Commentt from "./Commentt";
import {app } from './../firebase/firebase';
import {Link} from 'react-router-dom' ;

//   <Link to={{
//                                         pathname: "/showProfile",
//                                         search: '?sort=name',
//                                         hash: '#the-hash',
//                                         state: { fromDashboard: true }
//
//                                     }}>
//                                         m
//                                     </Link>
// <Link to="/ShowProfile" params={{ user: panel.user }}> {panel.user} </Link>
//main root
const mainroot = app.database().ref().child('app').child('timeline').child('post');
var headd;
var bodyy;
mainroot.on('value', sn => {
    headd=   sn.child('head').val();
    bodyy =  sn.child('body').val();
})

// component
class Timeline  extends Component {

    constructor(props){
        super(props);
        this.mainroot= app.database().ref().child('app').child('timeline').child('post');
        this.root = app.database().ref().child('app').child('timeline').child('post').child('items');
        this.state = {
            headd : headd,
            bodyy: bodyy,
            panel1:[],
        };
        this.rchange= this.rchange.bind(this);
    }

    // database interaction with star comment cmponent
    componentWillMount() {
        const  ppanel1=this.state.panel1 ;

        // information of header
        this.mainroot.on('value', s => {
                this.setState({
                    headd: s.child('head').val(),
                    bodyy: s.child('body').val(),
                });
            }
        )
        // comentt
        this.root.on('child_added', snap => {

            //comment
            const comm = app.database().ref().child('app').child('timeline').child('post').child('items').child(snap.key).child('comment group');
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
            const rom = app.database().ref().child('app').child('timeline').child('post').child('items').child(snap.key).child('rate');
            var i=0;
            var rate=0;
            var orate=0;
            rom.on('child_added', sneep =>{
                i +=1 ;
                rate += sneep.val();
            })
            orate = rate/i;

            // main component
            ppanel1.push({
                id:snap.key,
                revises:  revise,
                name:snap.child('name').val(),
                user:snap.child('user').val(),
                link:snap.child('link').val(),
                text:snap.child('text').val(),
                need:snap.child('need').val(),
                more:snap.child('more').val(),
                star: orate

            })

            ppanel1.sort(function (b, a) {
                return a.star - b.star;
            });

            this.setState({
                panel1: ppanel1
            });
        });
    }

    // enter for Rate
    rchange = (id, value) => {
        const rootstar = app.database().ref().child('app').child('timeline').child('post').child('items');
        rootstar.child(id).child('rate').push().set(value);
        alert( "Your Rating is saved " + id);
        this.forceUpdate();
    }

    render() {

        return (
            <Panel className="table">


                <Panel.Heading><h1>{this.state.headd} </h1></Panel.Heading>
                <Panel.Body>{this.state.bodyy} </Panel.Body>

                {this.state.panel1.map((panel) =>{

                    return(
                        <div  className="paddin" key={panel.id}>
                            <ListGroupItem>

                                <h2 className="userr">
                                    <Link to={"/show-profile/" + panel.user}> {panel.user} </Link>
                                </h2>
                                <a className="items" href={panel.link}> {panel.name} </a>
                                <h2> Explanation </h2>
                                <p>{panel.text}</p>
                                <h2> Need </h2>
                                <p>{panel.need}</p>
                                <h2>More </h2>
                                <p>{panel.more}</p>

                                <Star value={panel.star}  onChange={(v) => this.rchange(panel.id,v)} />

                                <Commentt onPressEnterr={panel.id} lm={panel.revises} addr={"post"} panel={"timeline"} />


                            </ListGroupItem>


                        </div>
                    )
                })}

            </Panel>
        );
    }
}

export default Timeline ;