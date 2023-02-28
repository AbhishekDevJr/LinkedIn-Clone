import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function FeedPost(props){
    return(
        <div className = "feedSect">
            <div className = "post-creator-info">
                <div className = "info-left">
                    <AccountCircleIcon className = "material-avatar" />
                    <div className = "creator-info">
                        <p id = "creator-name">{props.name}</p>
                        <p id = "creator-title">{props.title}</p>
                    </div>
                </div>

                <div className = "info-right">
                    <MoreHorizIcon className = "material-dots" />
                </div>
            </div>

            <div className = "post-content">
                {props.postContent}
            </div>

            <div className = "post-reactions">
                <div className = "reaction1">
                    <ThumbUpAltRoundedIcon className = "material-reactions" />
                    <p>Like</p>
                </div>

                <div className = "reaction2">
                    <ChatRoundedIcon className = "material-reactions" />
                    <p>Comment</p>
                </div>

                <div className = "reaction3">
                    <ShareRoundedIcon className = "material-reactions" />
                    <p>Repost</p>
                </div>

                <div className = "reaction4">
                    <SendRoundedIcon className = "material-reactions" />
                    <p>Send</p>
                </div>
            </div>
        </div>
    );
}

export default FeedPost;