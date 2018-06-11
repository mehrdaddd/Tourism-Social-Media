import React, { Component } from 'react';
import './App.css';
// import 'antd/dist/antd.css';
import Avatar from '@atlaskit/avatar';
import Comment, {
    CommentAuthor,
    CommentTime,
    CommentAction,
} from '@atlaskit/comment';
import { Conversation, ConversationResource } from '@atlaskit/conversation';
import { Collapse } from 'antd';
import {app } from '../firebase/firebase';
const Panel = Collapse.Panel;


class Commentt extends Component {
    constructor(){
        super();
        this.state = {
            name: "1",
            text: "1",
            time: "1"
        };
    }

    componentDidMount() {
        const roothead = app.database().ref().child('app').child('panel').child('items').child('comment group');

        roothead.on('value', snap => {
            this.setState({
                name: snap.child('comment1').child('name').val(),
                date: snap.child('comment1').child('date').val(),
                text: snap.child('comment1').child('text').val()

            });
        });
    }
    render() {
        const provider = new ConversationResource({
            url: "https://conversation-service/",
            user: "..."
        });


        return (
            <div className="comment">
                <Collapse accordion>
                    <Panel header="Comments" >
                        <Conversation containerId="ari:cloud:platform::conversation/demo"

                                      provider={provider}
                                      renderEditor={(Editor, props) => <Editor {...props} appearance="message" saveOnEnter={true} />}
                        />
                        <Comment
                            avatar={<Avatar  label="Atlaskit avatar" size="medium" />}
                            author={<CommentAuthor>{this.state.name}</CommentAuthor>}
                            time={<CommentTime>{this.state.date}</CommentTime>}
                            content={
                                <p className="commentext">
                                    {this.state.text}
                                </p>
                            }
                            actions={[
                                <CommentAction>Reply</CommentAction>,
                                <CommentAction>Like</CommentAction>,
                            ]}
                        />
                    </Panel>
                </Collapse>
            </div>

        );
    }
}

export default Commentt;
