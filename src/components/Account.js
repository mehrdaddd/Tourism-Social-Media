import React from 'react';
import  AuthUserContext from './AuthUserContext';
import  {PasswordForgetForm} from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import WithAuthorization from './withAuthorizationnnn';
const AccountPage =() =>

   <AuthUserContext.Consumer>

        {authUser =>

            <div className="pages">

                <PasswordForgetForm className="pages" />
                <PasswordChangeForm/>
            </div>
        }
    </AuthUserContext.Consumer>

    const authCondtion = (authUser) => authUser ;

export default WithAuthorization(authCondtion)(AccountPage);