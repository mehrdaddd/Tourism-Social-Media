import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import './App.css';
import { Table} from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import { Well, Image }from 'react-bootstrap';
import { FormControl, input,textarea, select, Checkbox, Radio,FormGroup,ControlLabel,Button,HelpBlock} from 'react-bootstrap';
import {app} from "../firebase/firebase";
import WithAuthorization from "./withAuthorizationnnn";
import  AuthUserContext from './AuthUserContext';
import * as routes from "../constants/routes";
import {firebase} from "../firebase";




const INITIAL_STATE = {
    Namee:0,
    EmailAddress: 0,
    JobSStatus: 0,
    Company: 0,
    Website: 0,
    Bio: 0,
    Willing: 0,
    Links: 0,
    Status: 0,
    Messages: 0,
    Rats: 0,
    Posts: 0,
    Comments: 0,
    Languages: 0,
    Places: 0,
    More: 0,
}


const byPropKey = (propertyName, value) => () => ({ [propertyName]: value,});


class Profile extends Component {
    constructor(props) {
        super(props);
        this.userroot = app.database().ref().child('app').child('userprofile');
        this.state = { ...INITIAL_STATE , pro:[], n:0 };
        this.foo = this.foo.bind(this);
        this.fill = this.fill.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.changee = this.changee.bind(this);

    }



    foo = ( authuser) => item => {
        console.log(authuser);
        if (item.EmailAddress === authuser.email) {
            this.state.n = 1;

        }
    };

    fill = ( authuser) => item => {

        if (item.EmailAddress === authuser.email) {
            this.state.EmailAddress = authuser.email;
            return 1;
        }
        else if( this.state.n === 0 && !item.EmailAddress){
            this.state.EmailAddress = authuser.email;
            return 1
        }
    };

    componentWillMount() {

        const ppro= this.state.pro ;
        this.userroot.on('child_added', s => {
            ppro.push({
                id: s.key,
                Namee: s.child('Namee').val(),
                EmailAddress: s.child('EmailAddress').val(),
                JobSStatus: s.child('JobSStatus').val(),
                Company: s.child('Company').val(),
                Website: s.child('Website').val(),
                Bio: s.child('Bio').val(),
                Willing: s.child('Willing').val(),
                Links: s.child('Links').val(),
                Status: s.child('Status').val(),
                Messages: s.child('Messages').val(),
                Rats: s.child('Rats').val(),
                Posts: s.child('Posts').val(),
                Comments: s.child('Comments').val(),
                Languages: s.child('Languages').val(),
                Places: s.child('Places').val(),
                More: s.child('More').val(),
            })
            this.setState({

                pro: ppro,
                n: 0
            });

        });
    }



    onSubmit = (event) => {
        const {
            Namee,
            EmailAddress,
            JobSStatus,
            Company,
            Website,
            Bio,
            Willing,
            Links,
            Status,
            Messages,
            Rats,
            Posts,
            Comments,
            Languages,
            Places,
            More,
            User
        } = this.state;


        const data = {
            Namee: Namee,
            EmailAddress: EmailAddress,
            JobSStatus: JobSStatus,
            Company: Company,
            Website: Website,
            Bio: Bio,
            Willing: Willing,
            Links: Links,
            Status: Status,
            Messages: Messages,
            Rats: Rats,
            Posts: Posts,
            Comments: Comments,
            Languages: Languages,
            Places: Places,
            More: More,
            User: EmailAddress.slice(0, -10),
        };

        alert( " your profile is changed " );
        this.userroot.push(data);
        event.preventDefault();
    }



    changee = ( item)=> {

        const changeeroot= app.database().ref().child('app').child('userprofile').child(item.id);
        const {
            Namee,
            EmailAddress,
            JobSStatus,
            Company,
            Website,
            Bio,
            Willing,
            Links,
            Status,
            Messages,
            Rats,
            Posts,
            Comments,
            Languages,
            Places,
            More,
            User
        } = this.state;

        const data = {
            Namee: Namee || item.Namee,
            EmailAddress: item.EmailAddress,
            JobSStatus: JobSStatus || item.JobSStatus,
            Company: Company || item.Company,
            Website: Website || item.Website,
            Bio: Bio  || item.Bio,
            Willing: Willing || item.Willing,
            Links: Links || item.Links,
            Status: Status || item.Status,
            Messages: Messages || item.Messages,
            Rats: Rats || item.Rats,
            Posts: Posts || item.Posts,
            Comments: Comments || item.Comments,
            Languages: Languages || item.Languages,
            Places: Places || item.Places,
            More: More || item.More,
            User: item.EmailAddress.slice(0, -10)
        };

        alert("Your profile is changed");
        changeeroot.set(data);

    }
    render() {

        return (

            <div>

                <AuthUserContext.Consumer>

                    {authUser =>  this.state.pro.map(this.foo(authUser))}
                </AuthUserContext.Consumer>
                <AuthUserContext.Consumer>

                    {authUser =>

                        <div >
                            {this.state.pro.filter(this.fill( authUser)).map( item => {
                                return (
                                    <div key={item.id}  >
                                        < MediaQuery minWidth={1100} className="pages">
                                            <h1>Profile</h1>
                                            <form className="profilesm" onSubmit={this.onSubmit}>

                                                <Table striped bordered condensed hover>

                                                    <tbody>
                                                    <tr>
                                                        <td>Name</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={item.Namee}
                                                                         onChange={event => this.setState(byPropKey('Namee', event.target.value))}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                    <tbody>
                                                    <tr>
                                                        <td>E-mail Address (necessary)</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={authUser.email}
                                                                         value={authUser.email}

                                                                         />
                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                    <tbody>
                                                    <tr>
                                                        <td>Job status</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={item.JobSStatus}
                                                                         onChange={event => this.setState(byPropKey('JobSStatus', event.target.value))}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                    <tbody>
                                                    <tr>
                                                        <td> Company</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={item.Company}
                                                                         onChange={event => this.setState(byPropKey('Company', event.target.value))}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                    <tbody>
                                                    <tr>
                                                        <td>Website of company</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={item.Website}
                                                                         onChange={event => this.setState(byPropKey('Website', event.target.value))}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                </Table>
                                                <h2>Bio</h2>

                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Bio}
                                                                 onChange={event => this.setState(byPropKey('Bio', event.target.value))}/>
                                                </Well>
                                                <h2>Willing to</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea"
                                                                 placeholder={item.Willing}
                                                                 onChange={event => this.setState(byPropKey('Willing', event.target.value))}/>
                                                </Well>
                                                <h2>Links</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Links}
                                                                 onChange={event => this.setState(byPropKey('Links', event.target.value))}/>
                                                </Well>
                                                <h2> Status</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Status}
                                                                 onChange={event => this.setState(byPropKey('Status', event.target.value))}/>
                                                </Well>
                                                <h2>Messages</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea"
                                                                 placeholder={item.Messages}
                                                                 onChange={event => this.setState(byPropKey('Messages', event.target.value))}/>
                                                </Well>
                                                <h2>Posts</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Posts}
                                                                 onChange={event => this.setState(byPropKey('Posts', event.target.value))}/>
                                                </Well>
                                                <h2>Comments</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea"
                                                                 placeholder={item.Comments}
                                                                 onChange={event => this.setState(byPropKey('Comments', event.target.value))}/>
                                                </Well>
                                                <h2>Raitngs</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Rats}
                                                                 onChange={event => this.setState(byPropKey('Rats', event.target.value))}/>
                                                </Well>
                                                <h2>Languages</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea"
                                                                 placeholder={item.Languages}
                                                                 onChange={event => this.setState(byPropKey('Languages', event.target.value))}/>
                                                </Well>
                                                <h2>Places</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Places}
                                                                 onChange={event => this.setState(byPropKey('Places', event.target.value))}/>
                                                </Well>
                                                <h2>More</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.More}
                                                                 onChange={event => this.setState(byPropKey('More', event.target.value))}/>
                                                </Well>

                                                <Button type="submit" disabled={this.state.n==1}> New</Button>
                                                &nbsp;
                                                &nbsp;
                                                &nbsp;
                                                <Button  type="button" disabled={this.state.n==0} onClick={event => this.changee(item )}  > Change</Button>

                                            </form>

                                        </MediaQuery>
                                        <MediaQuery maxWidth={1100}>
                                            <h1>Profile</h1>

                                            <form className="profiless" onSubmit={this.onSubmit}>

                                                <Table striped bordered condensed hover>

                                                    <tbody>
                                                    <tr>
                                                        <td>Name</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={item.Namee}
                                                                         onChange={event => this.setState(byPropKey('Namee', event.target.value))}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                    <tbody>
                                                    <tr>
                                                        <td>E-mail Address (necessary)</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={authUser.email}
                                                                         value={authUser.email}

                                                        />

                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                    <tbody>
                                                    <tr>
                                                        <td>Job status</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={item.JobSStatus}
                                                                         onChange={event => this.setState(byPropKey('JobSStatus', event.target.value))}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                    <tbody>
                                                    <tr>
                                                        <td> Company</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={item.Company}
                                                                         onChange={event => this.setState(byPropKey('Company', event.target.value))}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                    <tbody>
                                                    <tr>
                                                        <td>Website of company</td>
                                                        <td><FormControl componentClass="textarea"
                                                                         placeholder={item.Website}
                                                                         onChange={event => this.setState(byPropKey('Website', event.target.value))}/>
                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                </Table>
                                                <h2>Bio</h2>

                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Bio}
                                                                 onChange={event => this.setState(byPropKey('Bio', event.target.value))}/>
                                                </Well>
                                                <h2>Willing to</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea"
                                                                 placeholder={item.Willing}
                                                                 onChange={event => this.setState(byPropKey('Willing', event.target.value))}/>
                                                </Well>
                                                <h2>Links</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Links}
                                                                 onChange={event => this.setState(byPropKey('Links', event.target.value))}/>
                                                </Well>
                                                <h2> Status</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Status}
                                                                 onChange={event => this.setState(byPropKey('Status', event.target.value))}/>
                                                </Well>
                                                <h2>Messages</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea"
                                                                 placeholder={item.Messages}
                                                                 onChange={event => this.setState(byPropKey('Messages', event.target.value))}/>
                                                </Well>
                                                <h2>Posts</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Posts}
                                                                 onChange={event => this.setState(byPropKey('Posts', event.target.value))}/>
                                                </Well>
                                                <h2>Comments</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea"
                                                                 placeholder={item.Comments}
                                                                 onChange={event => this.setState(byPropKey('Comments', event.target.value))}/>
                                                </Well>
                                                <h2>Raitngs</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Rats}
                                                                 onChange={event => this.setState(byPropKey('Rats', event.target.value))}/>
                                                </Well>
                                                <h2>Languages</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea"
                                                                 placeholder={item.Languages}
                                                                 onChange={event => this.setState(byPropKey('Languages', event.target.value))}/>
                                                </Well>
                                                <h2>Places</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.Places}
                                                                 onChange={event => this.setState(byPropKey('Places', event.target.value))}/>
                                                </Well>
                                                <h2>More</h2>
                                                <Well>
                                                    <FormControl componentClass="textarea" placeholder={item.More}
                                                                 onChange={event => this.setState(byPropKey('More', event.target.value))}/>
                                                </Well>

                                                <Button type="submit" className="paddin" disabled={this.state.n==1}> New</Button>
                                                &nbsp;
                                                &nbsp;
                                                &nbsp;
                                                <Button  type="button" className="paddin" disabled={this.state.n==0} onClick={event => this.changee(item )}  > Change</Button>

                                            </form>


                                        </MediaQuery>

                                    </div>
                                )
                            })}
                        </div>

                    }
                </AuthUserContext.Consumer>
            </div>

        );
    }
}




const ProfileForm = () =>
    <form className="loginStyles">
        <Link to='/profile'> <h1> Profile </h1> </Link>
        <br/>
        <h3> Complete your profile to have better collaboration</h3>
    </form>








const authCondition = (authUser) =>  !!authUser ;


export default WithAuthorization (authCondition) (Profile);

export {ProfileForm};


