import React, {Component} from 'react';
import '../App.css';
import {Panel, ListGroupItem} from 'react-bootstrap';
import Star from '../Star';
import Commentt from "../Commentt";
import {app } from '../../firebase/firebase';
import * as routes from "../../constants/routes";

//main root
const mainroot = app.database().ref().child('app').child('panels').child('multifunctional');
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
        this.mainroot= app.database().ref().child('app').child('panels').child('multifunctional');
        this.root = app.database().ref().child('app').child('panels').child('multifunctional').child('items');
        this.state = {
            headd : headd,
            bodyy: bodyy,
            multifunctional:[],
            rend: ''
        };
        this.rend=this.rend.bind(this);

        this.rchange= this.rchange.bind(this);
    }

    // database interaction with star comment cmponent
    componentWillMount() {
        const  pmultifunctional=this.state.multifunctional ;

        this.mainroot.on('value', s => {
            this.setState({
                headd: s.child('head').val(),
                bodyy: s.child('body').val(),
            });
            }
        )
        this.root.on('child_added', snap => {

            //comment
            const comm = app.database().ref().child('app').child('panels').child('multifunctional').child('items').child(snap.key).child('comment group');
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
            const rom = app.database().ref().child('app').child('panels').child('multifunctional').child('items').child(snap.key).child('rate');
            var i=0;
            var rate=0;
            var orate=0;
            rom.on('child_added', sneep =>{
                i +=1 ;
                rate += sneep.val();
            })
            orate = rate/i;

            // main component
            pmultifunctional.push({
                id:snap.key,
                revises:  revise,
                name:snap.child('name').val(),
                link:snap.child('link').val(),
                text:snap.child('text').val(),
                star: orate

            })

            pmultifunctional.sort(function (b, a) {
                return a.star - b.star;
            });

            this.setState({
                multifunctional: pmultifunctional
            });
        });

    }

    rend = ( ) => {
        console.log( "gi");

    };
    // enter for comment
    rchange = (id, value) => {
        const rootstar = app.database().ref().child('app').child('panels').child('multifunctional').child('items');
        rootstar.child(id).child('rate').push().set(value);
        alert( "Your Rating is saved " + id);
        this.forceUpdate();
    }

    render() {


        return (
            <div>
            <Panel className="table">


                <Panel.Heading><h1>{this.state.headd} </h1></Panel.Heading>
                <Panel.Body>{this.state.bodyy} </Panel.Body>
                     {this.state.multifunctional.map((panel) =>{

                    return(
                        <div key={panel.id}>
                            <ListGroupItem> <a className="items" href={panel.link}> {panel.name} </a>

                                <p>{panel.text}</p>

                                <Star value={panel.star}  onChange={(v) => this.rchange(panel.id,v)} />


                                <Commentt onPressEnterr={panel.id} lm={panel.revises} addr={"multifunctional"} panel={"panels"} />


                            </ListGroupItem>





                        </div>
                    )
                })}
                     <a href={routes.ADDMORE}> <ListGroupItem>Add More &hellip;</ListGroupItem>  </a>

                 </Panel>
            </div>
        );
    }
}

export default Multifunctionall ;

