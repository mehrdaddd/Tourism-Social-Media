import React from 'react';
import  AuthUserContext from './AuthUserContext';
import  {PasswordForgetForm} from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import WithAuthorization from './withAuthorizationnnn';
import 'bootstrap';



const AccountPage =() =>

   <AuthUserContext.Consumer>

        {authUser =>

            <form >

                <PasswordForgetForm   />

                <PasswordChangeForm  />
            </form>
        }
    </AuthUserContext.Consumer>

    const authCondtion = (authUser) => authUser ;

export default WithAuthorization(authCondtion)(AccountPage);