import React from 'react';
import  AuthUserContext from './AuthUserContext';
import  {PasswordForgetForm} from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import WithAuthorization from './withAuthorizationnnn';
import 'bootstrap';
const AccountPage =() =>

   <AuthUserContext.Consumer>

        {authUser =>

            <div>

                <PasswordForgetForm   />

                <PasswordChangeForm  />

            </div>
        }
    </AuthUserContext.Consumer>


const authCondition = (authUser) =>  !!authUser ;

export default  WithAuthorization (authCondition)(AccountPage);