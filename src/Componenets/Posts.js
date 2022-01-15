import React from 'react';
import { useSelector } from 'react-redux';

import { Spinner } from "react-bootstrap";
import Post from './Post';


const Posts = () => {

  const posts = useSelector(state => state.posts);
  
  return (
    <div className="home_box1">

      {
        posts.length < 1?(
          <div>
            no post
          </div>
        ): !posts.length && (
          <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        )
      }
    
      <div className="row w-100 p-0">
        { posts.map((post, index) => (
            <Post post={post} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Posts
