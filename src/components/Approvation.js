import React, {Component} from 'react';
import {app } from '../firebase/firebase';
import { Table} from 'react-bootstrap';
import './App.css';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router-dom' ;
import './App.css';
import WithAuthorization from "./withAuthorizationnnn";
import  AuthUserContext from './AuthUserContext';

class Approvation extends Component {
    constructor(props){
        super(props);
        this.approveroot= app.database().ref().child('app').child('addmore');
        this.state= {
            addd:[]
        };
        this.approve= this.approve.bind(this);
    }

    // show companys that wait for approvation
    componentWillMount() {
        const prevadd= this.state.addd;
        this.approveroot.on('child_added', s => {
            prevadd.push({
                id: s.key,
                select: s.child('organization').val(),
                ro: s.child('ro').val(),
                valueFull: s.child('fullname').val(),
                email: s.child('email').val(),
                valueweb: s.child('link').val(),
                valueCompany: s.child('name').val(),
                valueWebExplanation: s.child('text').val()
            })
            this.setState({
                addd :prevadd
            });

        });
    }

    //approve the company add copany to list and remove from aprovation
    approve=(add,id) => {
        if(add.ro == "panels") {
            const addroot = app.database().ref().child('app').child(add.ro).child(add.select).child('items');
            const data = {
                link: add.valueweb,
                name: add.valueCompany,
                text: add.valueWebExplanation,
                rate: {star: 0}
            };
            addroot.push(data);
        }
        else if (add.ro == "timeline"){
            const addroot = app.database().ref().child('app').child(add.ro).child("post").child('items');
            const data = {
                link: add.valueweb,
                name: add.valueCompany,
                text: add.valueWebExplanation,
                rate: {star: 0}
            };
            addroot.push(data);
        }

        //remove from  ...
        this.approveroot.child(add.id).remove();

        //Alert

        alert(" The Company is approved");
        this.forceUpdate();

    }


    render() {

        return (
            <AuthUserContext.Consumer>

                {authUser =>

                    <div className= "approvation">

                        {this.state.addd.map((add) => {

                            return (
                                <div key={add.id}>
                                    <MediaQuery minWidth={800} className="pages" >

                                        <h1> Please approve this new company</h1>
                                        <div >

                                            <Table striped bordered condensed hover>

                                                <tbody>
                                                <tr>
                                                    <td>Type</td>
                                                    <td>{add.ro}</td>
                                                </tr>

                                                <tr>
                                                    <td>Type of organization</td>
                                                    <td>{add.select}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td>Full Name</td>
                                                    <td>{add.valueFull}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td> Email Address</td>
                                                    <td>{add.email}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td>Name of Company</td>
                                                    <td>{add.valueCompany}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td> Web Address</td>
                                                    <td>{add.valueweb}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td> Explanation</td>
                                                    <td>{add.valueWebExplanation}</td>
                                                </tr>
                                                </tbody>


                                            </Table>

                                            <button
                                                type="button"
                                                onClick={() => this.approve(add)}
                                            >
                                                Approve

                                            </button>
                                        </div>

                                    </MediaQuery>

                                    <MediaQuery maxWidth={800}  >
                                        Not accessible
                                    </MediaQuery>
                                </div>

                            )
                        })}


                    </div>
                }
            </AuthUserContext.Consumer>

        );
    }
}

const ApprovationForm = () =>
    <form className="loginStyles">
        <Link to="/approvation"> <h1>  To Approve the new Company </h1> </Link>
        <br/>
        <h3>Just managers can access </h3>
    </form>



const authCondition = (authUser) =>  authUser ?

    authUser.uid === "FyPk0xDy60X1FDZ0LKcBY5tIuDh2"
    :    null;








export default WithAuthorization (authCondition) (Approvation);


export  {ApprovationForm} ;

