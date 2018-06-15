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

//todo :  be empty and reaction after enrer the comment

class Commentt extends Component {
    constructor(){
        super();
        this.rootcomm = app.database().ref('app/panels/items/item1/comment group');
        this.roothead = app.database().ref().child('app').child('panels').child('items').child('item1').child('comment group');
        this.state = {
            revises:[],
            comment: ''
        };
    }

  /*  componentDidMount() {
        const roothead = app.database().ref().child('app').child('panels').child('items').child('item').child('comment group');

        roothead.on('value', snap => {
            this.setState({
                name: snap.child('comment1').child('name').val(),
                date: snap.child('comment1').child('date').val(),
                text: snap.child('comment1').child('text').val()

            });
        });
    }
    */
    componentDidMount() {
        const ccoment= this.state.revises;
        this.roothead.on('child_added', snap => {

            ccoment.push({
                id:snap.key,
                name:snap.child('name').val(),
                date:snap.child('date').val(),
                text: snap.child('text').val()
            });

            this.setState({
                revises:ccoment
            });
        });
}

        emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ comment: '' });
    }

    onChangecomment = (e) => {
        this.setState({ comment: e.target.value });
    }

    enterr = (e) => {
        console.log(e.target.value);
        var d = new Date();
        var data = {
            text: e.target.value,
            date: d.toDateString(),
            name: 'Anonymous'
        }
            this.rootcomm.push(data);
    }

        //set(e.target.value).set(d.toDateString());

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
                                <div key={com.id}>
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
