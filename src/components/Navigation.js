import  React from 'react' ;
import {Link} from 'react-router-dom';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import  AuthUserContext from './AuthUserContext';

import HomeButton from './HomeButton';
import AccountButton from './AccountButton';
import TimelineButton from './TimelineButton';
import SignInButton from './SignButton';




const Navigation =(  ) =>

    <AuthUserContext.Consumer>
        { authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth /> }
    </AuthUserContext.Consumer>


const NavigationNonAuth=() =>

    <div>
        <SignInButton/>
        <TimelineButton/>
        <HomeButton/>

    </div>


const NavigationAuth =() =>
    <div >
        <SignOutButton />
        <AccountButton/>
        <TimelineButton/>
        <HomeButton/>

    </div>

        export default Navigation;

