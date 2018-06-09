import React from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import New from './components/New';
import  * as routes from './constants/routes';
import SignUpPage   from './components/SignUp';
import SignInPage from './components/SignIn';
import PaswordForgetPage from './components/PasswordForget';
import AccountPage from './components/Account';
import WithAuthentication from './components/withAuthentication';
import PasswordChangeForm from "./components/PasswordChange";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () =>
    <Router>
        <div className="App">

            <Route
                component={() => <Header/>}
            />


            <Route
                path={routes.HOME}
                component={() => <Home/>}
            />

            <Route
                path={routes.New}
                component={() => <New />}
            />


            <Route
                exact path={routes.SIGN_IN}
                component={() => <SignInPage/>}

            />

            <Route
                exact path={routes.SIGN_UP}
                component={() => <SignUpPage/>}
            />


            <Route
                exact path={routes.ACCOUNT}
                component={() => <AccountPage/>}
            />

            <Route
                exact path={routes.PASSWORD_FORGET}
                component={() => <PaswordForgetPage/>}
            />
            <Route
                exact path={routes.PASSWORD_CHANGE}
                component={() => <PasswordChangeForm/>}
            />

            <Route
                component={() => <Footer/>}
            />
        </div>
    </Router>

export default WithAuthentication(App) ;
