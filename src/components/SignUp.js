import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import * as routes from '../constants/routes';
import {auth} from '../firebase';
import './App.css';
const SignUpPage = ({history}) =>
    <div className="pages">
        <h1>SignUp </h1>
        <SignUpForm history={history} />
    </div>




const INITIAL_STATE= {
    email: '',
    passwordOne:'',
    passwordTwo:'',
    error:null
};

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value,});

class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            email,
            passwordOne,
        }= this.state;

        const {
            history,
        }=this.props;

        auth.doCreateUserWithEmailAndPassword(email , passwordOne)
            .then(authUser =>{

                     this.setState(() => ({...INITIAL_STATE}));
                     history.push(routes.HOME);
                 })
                 .catch(error => {
                    this.setState(byPropKey('error', error));
                 });

    event.preventDefault();
}

render() {
    const {
        email,
        passwordOne,
        passwordTwo,
        error
    }=this.state;

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ;

    return(
        <form className="pages"   onSubmit={this.onSubmit}>

            <input value={email}
                   onChange={ event => this.setState(byPropKey('email', event.target.value))}
                   type="email"
                   placeholder="Email"
            />

            <input value={passwordOne}
                   onChange={ event => this.setState(byPropKey('passwordOne', event.target.value))}
                   type="password"
                   placeholder="PasswordOne"
            />

            <input value={passwordTwo}
                   onChange={ event => this.setState(byPropKey('passwordTwo', event.target.value))}
                   type="password"
                   placeholder="PasswordTwo"
            />

            <button disabled={isInvalid} type="submit">
                Sign Up
            </button>

            {error && <p>{error.message} </p>}

        </form>
    );
}
}


const SignUpLink=() =>
    <p>
        Don't have an account?
        {''}
        <Link to={routes.SIGN_UP}> Sign Up  </Link>
    </p>




export default withRouter(SignUpPage);

export {SignUpForm,
    SignUpLink
};