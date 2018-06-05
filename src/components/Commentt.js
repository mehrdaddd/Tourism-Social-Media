import React, { Component } from 'react';
import './App.css';
import Avatar from '@atlaskit/avatar';
import Comment, {
    CommentAuthor,
    CommentTime,
    CommentAction,
} from '@atlaskit/comment';
import { Conversation, ConversationResource } from '@atlaskit/conversation';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
const Panel = Collapse.Panel;

class Commentt extends Component {

    render() {

        const provider = new ConversationResource({
            url: 'https://conversation-service/',
            user: "mmm"
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
                            author={<CommentAuthor>John Smith</CommentAuthor>}

                            time={<CommentTime>30 August, 2016</CommentTime>}
                            content={
                                <p className="commentext">
                                    Comments
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
