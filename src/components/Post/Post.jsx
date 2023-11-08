import React, { useContext, useState } from 'react'
import "./Post.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faHeart  , faComment} from '@fortawesome/free-regular-svg-icons'
import {faHandHoldingHeart, faL, faRocket} from '@fortawesome/free-solid-svg-icons'
import { impressionContext } from '../../contexts/impressioncontext'
import Comment from '../Modals/Comment/Comment'
import { useNavigate } from 'react-router'
import 'react-loading-skeleton/dist/skeleton.css'

const Post = (curr) => {
    const navigate = useNavigate();
    const {title , postimage , likes , comment , } = curr;
    const{username , userprofile} = curr.user;
    const {likeThePost} = useContext(impressionContext);

    const [CommentModal, setCommentModal] = useState(false);

    const closeModAL = ()=>{
        setCommentModal(false);
    }

    const [liked, setliked] = useState(false);

    const postLiked = () =>{
        setliked(true);
        likes.length++;
    }
    
    const UnlikeThePost = ()=>{
        setliked(false);
        likes.length--;
    }

    
  return (
    <>
    <div className="post-main">
        <div className="post-upper">
            <div className="post-upper-left">
            <img src={userprofile}  alt="userimage" />

            <div onClick={()=>{
                navigate("/Otheruser" , {state : {username:username}})
            }} className="post-upper-left-text">
                <p>{username}</p>
            </div>
            </div>
            <div className="post-upper-right">
        <p>...</p>
            </div>
        </div>
        <div className="post-detail">
            <p>{title}</p>
        </div>

        <div className="post-image">
            <img src={postimage}alt="postimage" />
        </div>

     

        <div className="posticons">
        {
            liked===true ? <FontAwesomeIcon onClick={()=>{
                likeThePost(curr._id);
                UnlikeThePost();
            }} icon={faRocket} size='lg' color='red' /> : <FontAwesomeIcon onClick={()=>{
                likeThePost(curr._id);
                postLiked();
            }} icon={faHeart} size='lg' color='red' />
        }
        <FontAwesomeIcon onClick={()=>{
            setCommentModal(true);
        }} icon={faComment} size='lg' color='black' />
        </div>

        <div className="post-impression">
            <p>{likes.length} Likes</p>
            <p>{comment.length} Comments</p>
        </div>
        <div className="post-border">
            
        </div>
    </div>
    {
        CommentModal!==false ? <Comment currpost={curr} close={closeModAL} /> : <div></div>
    }
    </>
  )
}

export default Post