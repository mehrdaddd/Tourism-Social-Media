import React,{Component} from 'react';
import { withRouter} from 'react-router-dom';
import {SignUpLink} from './SignUp'
import * as routes from '../constants/routes';
import {auth} from '../firebase';
import  {PasswordForgetLink} from "./PasswordForget";
import './App.css';

const SignInPage= ({history}) =>
    <div   className="pages">
        <h1>SignIn </h1>
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
    </div>




const byPropKey = (propertyName, value) => () => ({ [propertyName]: value,});

const INITIAL_STATE= {
    email: '',
    password:'',
    error:null
};

class SignInForm extends Component{
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        }= this.state;

        const {
            history,
        }=this.props;

        auth.doSignInEmailAndPassword(email,password)
            .then (() => {
                this.setState (() => ({ ...INITIAL_STATE}));
                history.push(routes.HOME);
            })
            .catch( error => {
                this.setState(byPropKey('error' ,error));
            });
        event.preventDefault();
    }


    render() {
        const {
            email,
            password,
            error
        }=this.state;

        const isInvalid =
            password === '' ||
            email === '' ;


        return(

            <form className="pages"    onSubmit={this.onSubmit}>


                <input value={email}
                       onChange={ event => this.setState(byPropKey('email', event.target.value))}
                       type="text"
                       placeholder="Email"
                />

                <input value={password}
                       onChange={ event => this.setState(byPropKey('password', event.target.value))}
                       type="password"
                       placeholder="Password"
                />

                <button disabled={isInvalid} type="submit">
                    Sign IN
                </button>

                {error && <p>{error.message} </p> }

            </form>
        );
    }
}






export default withRouter(SignInPage);

export {SignInForm};