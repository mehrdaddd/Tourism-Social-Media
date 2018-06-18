import React, { Component } from 'react';
import './App.css';
// import 'antd/dist/antd.css';
import Avatar from '@atlaskit/avatar';
import Comment, {
    CommentAuthor,
    CommentTime,
    CommentAction,
} from '@atlaskit/comment';
import { Input, Icon } from 'antd';
import { Collapse } from 'antd';
import {app } from '../firebase/firebase';
const Panel = Collapse.Panel;

 // main class
class Commentt extends Component {
    constructor(props){
        super(props);
        this.state = {
            revises: [],
            comment: '',
        };
            if(this.props.lm ){
                this.state = {
                    revises: this.props.lm,
                };
            }

        this.emitEmpty = this.emitEmpty.bind(this);
    }

        emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ comment: '' });
    }

    onChangecomment = (e) => {
        this.setState({ comment: e.target.value });
    }

    //push data to database
    enterr = (e) => {

        const rootp = app.database().ref().child('app').child('panels').child(this.props.addr).child('items').child(this.props.onPressEnterr).child('comment group');
        var d = new Date();
        const data = {

            text: e.target.value,
            date: d.toDateString(),
            name: 'Anonymous'
        }
            rootp.push(data);
            this.forceUpdate();
            this.emitEmpty();

    }

    render() {

        const { comment } = this.state;
        const suffix = comment ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

        return (
            <div className="comment">
                <Collapse accordion>
                    <Panel header="Comments" >

                        <Input
                            placeholder=" Write your comment"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={suffix}
                            value=  {comment}
                            onChange={this.onChangecomment}
                            ref={node => this.userNameInput = node}
                            onPressEnter={ this.enterr}

                        />

                        {this.state.revises.map((com) => {
                            return (
                            <div  key={com.id} style={{margin: 7}}>
                            <Comment
                            avatar={<Avatar label="Atlaskit avatar" size="medium"/>}
                            author={<CommentAuthor>{com.name}</CommentAuthor>}
                            time={<CommentTime>{com.date}</CommentTime>}
                            content={
                                <p className="commentext">
                                    {com.text}
                                </p>
                                  }

                            actions={[
                            <CommentAction>Reply</CommentAction>,
                            <CommentAction>Like</CommentAction>,
                        ]}
                            />
                            </div>
                            );
                        })}


                    </Panel>
                </Collapse>
            </div>

        );
    }
}

export default Commentt;
