import React from 'react';
import {auth} from '../firebase/index';
import './App.css';

const SignOutButton=() =>
 <div className= "out">
    <button
    type="button"
    onClick={auth.doSignOut}
    >
        Sign Out

    </button>
</div>
export default SignOutButton;