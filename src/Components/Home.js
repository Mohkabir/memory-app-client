import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Posts from './Posts';
import Form from './Form';
import { fetchPost } from '../Redux/actions/postActions';



function Home() {

  const dispatch = useDispatch();
  const currentId = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPost())
  }, [currentId, dispatch])

  return (
    <div className="w-full d-flex justify-content-between flex-column-reverse flex-md-row my-4 ">
        <Posts/>
        <Form/>
    </div>
  )
}

export default Home
