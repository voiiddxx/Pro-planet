import React, { useContext, useState } from 'react'
import "./Comment.css"
import { impressionContext } from '../../../contexts/impressioncontext';
const Comment = ({currpost , close}) => {

    

    const {postComment} = useContext(impressionContext);
    

    const [commentdetail, setcommentdetail] = useState("");
  return (
    <>
   <div className="comment-main">
    <div className="comment-upper">
    <h1>Comments</h1>
    <h1 onClick={close} >Close</h1>
    </div>

    <div className="comment-input">
        <input onChange={(e)=>{
            setcommentdetail(e.target.value);
        }} type="text" placeholder='Write Your Comment Here' />
        <div onClick={()=>{
            postComment(commentdetail , currpost._id);
        }} className="comment-post-button">
            <p>Post</p>
        </div>
    </div>

   {
    currpost.comment.length!==0 ? currpost.comment.map((curr , index)=>{
        return  <div className="all-comments">
        <div className="all-comments-upper">
            <img src={curr.user.userprofile} alt='commentuserimage' />
            <h2>{curr.user.username}</h2>
        </div>
        <p>{curr.commentdetail}</p>


        <div className="border-comment"></div>
    </div>
    
    }) : <p>There is no comments</p>
   }
   </div>
    </>
  )
}

export default Comment