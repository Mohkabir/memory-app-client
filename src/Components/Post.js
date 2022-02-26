import React from 'react';
import { useDispatch } from "react-redux";
import { deletePost, updateCurrentId, likePost } from '../Redux/actions/postActions';
import moment from "moment";

const Post = ({post}) => {

  const dispatch = useDispatch()

  const editPost = () => {
    dispatch(updateCurrentId(post._id))
  }

  return (
    <div className="col-12 col-md-6 col-lg-3 card_custom m-2">
      <div className="box1">
        <img src={post.selectedFile} alt="img" className="w-100 h-100" />
        <div className="thumbnail">
          <small>{moment(post.createdAt).fromNow()}</small>   
          <span className="" onClick={editPost}><i className="fas fa-edit"></i></span>
        </div>
      </div>
      <div className="box2">
        <small className=" block"><span className="text-xs">Created by</span> <span className="uppercase">{post.creator}</span></small>
        <p className="text-sm">Title: {post.title}</p>
        <p className="text-xs"><small>Description: {post.message}</small></p>
        <div className="d-flex justify-content-between align-items-center">
          <div
            style={{ cursor: "pointer"}} 
            className=" rounded text-xs" 
            onClick={() => dispatch(likePost(post._id))}>
            <i className="fa fa-thumbs-up" style={{color:"blue"}} aria-hidden="true"></i>
            <small> Like {post.likes.length}</small>
          </div>
          <small className="text-red-500 pointer text-xs" onClick={() => dispatch(deletePost(post._id))}>
            <i className="far fa-trash-alt" style={{color:"red"}} ></i> Delete
          </small>
        </div>
      </div>
    </div>
  )
}

export default Post
