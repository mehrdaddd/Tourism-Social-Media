import React from 'react';
import  AuthUserContext from './AuthUserContext';
import  {PasswordForgetForm} from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import WithAuthorization from './withAuthorizationnnn';
import 'bootstrap';
import {ApprovationForm} from './Approvation';
import {AddMoreForm} from "./AddMore";
import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';

const AccountPage =() =>

   <AuthUserContext.Consumer>

        {authUser =>
<div>
            <MediaQuery minWidth={725} >



               <div className="gutter-example">
                           <Row gutter={8}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">  <PasswordForgetForm /> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"><PasswordChangeForm /></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"> <ApprovationForm /> </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box"> <AddMoreForm /> </div>
      </Col>

    </Row>
               </div>


            </MediaQuery>

            <MediaQuery maxWidth={725}>

                <PasswordForgetForm />
                <PasswordChangeForm />
                <ApprovationForm />
                <AddMoreForm />
            </MediaQuery>
</div>
        }
    </AuthUserContext.Consumer>


const authCondition = (authUser) =>  !!authUser ;

export default  WithAuthorization (authCondition)(AccountPage);