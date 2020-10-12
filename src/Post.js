import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import {ExpandMoreOutlined} from "@material-ui/icons";

function Post({ profilePic , image , username, timestamp  , message}) {
    
    return (
        <div className="post">
            <div className="postTop">
                <Avatar src={profilePic}  className="postAvatar" />
                <div className="postTopInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>

                </div>
            </div>

            <div className="postBottom">
                <p>{message}</p>
            </div>

            <div className="postImage">
            <img src={image} alt="" />
            </div>
            
            <div className="postOptions">
            <div className="postOption">
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className="postOption">
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>
            <div className="postOption">
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className="postOption">
                <AccountCircleIcon />
                <ExpandMoreOutlined />
            </div>
            </div>

        </div>
    )
}

export default Post;
