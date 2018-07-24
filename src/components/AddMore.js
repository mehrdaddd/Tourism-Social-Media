import React, {Component} from 'react';
import { FormControl, input,textarea, select, Checkbox, Radio,FormGroup,ControlLabel,Button,HelpBlock} from 'react-bootstrap';
import {app } from '../firebase/firebase';
import WithAuthorization from './withAuthorizationnnn';
import {Link} from 'react-router-dom' ;


const INITIAL_STATE= {
    select:'',
    valueFull:'',
    email: '',
    valueweb:'',
    valueCompany:'',
    valueWebExplanation:''

};

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value,});

class AddMore extends Component {
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }

   onSubmit = (event) => {
        const {
            select,
            valueFull,
            email,
            valueweb,
            valueCompany,
            valueWebExplanation
        }=  this.state;

       const addroot = app.database().ref().child('app').child('addmore');
       const data = {
           organization:this.state.select,
           fullname: this.state.valueFull,
           email: this.state.email,
           link: 'https://'+this.state.valueweb,
           name: this.state.valueCompany,
           text: this.state.valueWebExplanation,
       };

       addroot.push(data);
       this.setState(() => ({...INITIAL_STATE}));
       alert( "Your new company will be evaluate and send you back the feedback " );
       event.preventDefault();
   }


    render() {

        return (

            <form className= "addmore" onSubmit={this.onSubmit}>

                <FormGroup>
                    <ControlLabel> <h1>Add company </h1></ControlLabel>
                </FormGroup>

                <FormGroup >
                    <ControlLabel>Which Sector</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" value={this.state.select} onChange={ event => this.setState(byPropKey('select', event.target.value))}>
                        <option value="other">...</option>
                        <option value="multifunctional">Multifunctional</option>
                        <option value="flights">Flights</option>
                        <option value="information">Information</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="socialmedia">Social medias</option>
                        <option value="taxi" >Taxi and rental car</option>
                        <option value="tools">Tools</option>
                        <option value="tours">Tours</option>
                        <option value="accommodation">Accommodation</option>
                        <option value="train">Train tickets</option>

                    </FormControl>
                </FormGroup>

                <span  >
                    <ControlLabel>Full Name</ControlLabel>

                    <FormControl componentClass="textarea" placeholder="Full Name" value={this.state.valueFull} onChange={ event => this.setState(byPropKey('valueFull', event.target.value))} />
                </span>
                <span  >
                    <ControlLabel> Email Address</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Email Address" value={this.state.email} onChange={ event => this.setState(byPropKey('email', event.target.value))} />
                </span>

                { /*   <FieldGroup id="formControlsPassword" label="Password" type="password" />


                <Checkbox checked readOnly>
                    Checkbox
                </Checkbox>
                <Radio checked readOnly>
                    Radio
                </Radio>

                <FormGroup>
                    <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
                    <Checkbox inline>3</Checkbox>
                </FormGroup>
                <FormGroup>
                    <Radio name="radioGroup" inline>
                        1
                    </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        2
                    </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        3
                    </Radio>
                </FormGroup>


                <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Multiple select</ControlLabel>
                    <FormControl componentClass="select" multiple>
                        <option value="select">select (multiple)</option>
                        <option value="other">...</option>
                    </FormControl>
                </FormGroup>
*/ }
                <span  >
                    <ControlLabel>Name of Company</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Name of Company" value={this.state.valueCompany} onChange={ event => this.setState(byPropKey('valueCompany', event.target.value))} />
                </span>

                <span  >
                    <ControlLabel> Web Address</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Web Address" value={this.state.valueweb} onChange={ event => this.setState(byPropKey('valueweb', event.target.value))} />
                </span>

                <span >
                    <ControlLabel> Explanation</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Explanation" value={this.state.valueWebExplanation} onChange={ event => this.setState(byPropKey('valueWebExplanation', event.target.value))} />
                </span>

                <Button type="submit">Submit</Button>
            </form>
        );
    }
}

            const AddMoreForm = () =>
                <form className="loginStyles">
                    <Link to='/add-more'> <h1> To Add new company  </h1> </Link>
                    <br/>
                    <h3>Accessible for all users</h3>
                </form>




const authCondition = (authUser) =>  !!authUser ;

export default  WithAuthorization (authCondition)(AddMore);

export {AddMoreForm} ;

