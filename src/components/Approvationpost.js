import React, {Component} from 'react';
import {app } from '../firebase/firebase';
import { Table} from 'react-bootstrap';
import './App.css';
import MediaQuery from 'react-responsive';
import {Link} from 'react-router-dom' ;
import './App.css';
import WithAuthorization from "./withAuthorizationnnn";
import AuthUserContext from './AuthUserContext';

class Approvationpost extends Component {
    constructor(props){
        super(props);
        this.approveroot= app.database().ref().child('app').child('addpost');

        this.state= {
                  addd:[]
        };
        this.approve= this.approve.bind(this);
    }

    // show companys that wait for approvation
    componentWillMount() {
        const prevadd = this.state.addd;
        this.approveroot.on('child_added', s => {
            const approveselesctroot= app.database().ref().child('app').child('addpost').child(s.key).child("select");
            var x = '';
            approveselesctroot.on('child_added', sm => {

                if (sm.val() === true) {

                    x = sm.key + ", " + x;

                }

            })

            prevadd.push({
                id: s.key,
                select: x,
                ro: s.child('ro').val(),
                user: s.child('user').val(),
                valueweb: s.child('link').val(),
                valueCompany: s.child('name').val(),
                valueWebExplanation: s.child('text').val(),
                need: s.child('need').val(),
                more: s.child('more').val()
            })


            this.setState({
                addd :prevadd
            });

        });
    }

    //approve the company add copany to list and remove from aprovation
    approve=(add,id) => {

            const addroot = app.database().ref().child('app').child(add.ro).child("post").child('items');
            const data = {
                link: add.valueweb,
                user: add.user.slice(0, -10),
                name: add.valueCompany,
                text: add.valueWebExplanation,
                need: add.need,
                more: add.more,
                rate: {star: 0}
            };
            addroot.push(data);


        //remove from  ...
        this.approveroot.child(add.id).remove();

        //Alert
        this.forceUpdate();
        alert(" The Company is approved");


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
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td>User Name</td>
                                                    <td>{add.user}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td>Type of organizations</td>
                                                    <td>{add.select}</td>
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

                                                <tbody>
                                                <tr>
                                                    <td> Need</td>
                                                    <td>{add.need}</td>
                                                </tr>
                                                </tbody>

                                                <tbody>
                                                <tr>
                                                    <td> More</td>
                                                    <td>{add.more}</td>
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

const ApprovationpostForm = () =>
    <form className="loginStyles">
        <Link to="/approvationpost"> <h1>  To Approve the Posts </h1> </Link>
        <br/>
        <h3>Just managers can access this part</h3>
    </form>



const authCondition = (authUser) =>  authUser ?

    authUser.uid === "FyPk0xDy60X1FDZ0LKcBY5tIuDh2"
    :    null;








export default WithAuthorization (authCondition) (Approvationpost);


export  {ApprovationpostForm} ;

