import React,{Component} from 'react';
import { withRouter} from 'react-router-dom';
import {SignUpLink} from './SignUp'
import * as routes from '../constants/routes';
import {auth} from '../firebase';
import {app ,facebookProvider,googleProvider} from '../firebase/firebase';
import  {PasswordForgetLink} from "./PasswordForget";
import './App.css';
import { Redirect } from 'react-router-dom'
import { Toaster, Intent } from '@blueprintjs/core'

const loginStyles = {
    width: "90%",
    maxWidth: "315px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px"
}

const SignInPage= ({history, historyy}) =>
    <div   className="pages">
        <h1>SignIn </h1>
        <SignInForm history={history} historyy={historyy}/>
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
        this.state = {
            redirect: false
        }
        this.state= { ...INITIAL_STATE};
        this.authWithFacebook = this.authWithFacebook.bind(this)

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

authWithFacebook() {
        app.auth().signInWithPopup(facebookProvider)
            .then(() => {
                this.setState (() => ({ ...INITIAL_STATE}));
                this.setState({ redirect: true });

            }).catch(error => {
            this.toaster.show({ intent: Intent.DANGER, message: "Unable to sign in with Facebook" })
        });
    }

   authWithGoogle() {
        app.auth().signInWithPopup(googleProvider)
            .then(() => {
                this.setState (() => ({ ...INITIAL_STATE}));
                this.setState({ redirect: true });

            }).catch(error => {
            this.toaster.show({ intent: Intent.DANGER, message: "Unable to sign in with Facebook" })
        });
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

        if (this.state.redirect === true) {
            return <Redirect to={{ pathname: '/home' } }/>
        }




        return(
<div>
            <form className="pages"    onSubmit={this.onSubmit}>


                <input     className="pt-input"
                           ref={(input) => { this.emailInput = input }}
                           value={email}
                           onChange={ event => this.setState(byPropKey('email', event.target.value))}
                           type="text"
                           placeholder="Email"
                />

                &nbsp; &nbsp;

                <input className="pt-input"
                    value={password}
                       onChange={ event => this.setState(byPropKey('password', event.target.value))}
                       type="password"
                       placeholder="Password"
                />
                &nbsp; &nbsp;

                <button disabled={isInvalid}  className="pt-button pt-intent-primary" style={{width: "30%"}} type="submit"   >
                    Sign IN
                </button>
                <br />
                <br />
                <br />

                {error && <p>{error.message} </p> }

            </form>

            <div style={loginStyles}>
                <div style={{marginBottom: "10px"}} className="pt-callout pt-icon-info-sign">
                    <h5>Note</h5>
                    If you don't have an account already, this form will create your account.
                </div>
            <Toaster ref={(element) => { this.toaster = element }} />
        <button style={{width: "100%"}} className="pt-button pt-intent-primary" onClick={() => { this.authWithFacebook() }}>Log In with Facebook</button>

                <br />
                <br />

        <button style={{width: "100%"}} className="pt-button pt-intent-primary" onClick={() => { this.authWithGoogle() }}>Log In with Google</button>
        <hr style={{marginTop: "10px", marginBottom: "10px"}}/>


        </div>
</div>
        );
    }
}






export default withRouter(SignInPage);

export {SignInForm};