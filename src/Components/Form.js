import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from "react-file-base64";
import { createForm, updateCurrentId, updatePost } from "../Redux/actions/postActions";


const Form = () => {

  const dispatch = useDispatch();
  const currentId = useSelector(state => state.postsId);
  const post = useSelector(state => currentId? state.posts.find(p => p._id === currentId):null);


  const [ formData, setformData ] = useState({
    creator: "",
    message: "",
    selectedFile:"",
    title: ""
  })

  const [ imgname , setImagename] = useState(null);


  useEffect(() => {
    if(currentId){
      setformData(post)
    }else{
      return null
    }
  
  }, [currentId])


  const handlesubmit = (e) => {
    e.preventDefault();

    if(currentId){
      dispatch(updatePost(currentId, formData))
    }else{
      dispatch(createForm(formData))
    }
    
    clear()
    
  } 

  const clear = () => {
    dispatch(updateCurrentId(null))
    setformData({
      creator: "",
      message: "",
      selectedFile:"",
      title:""
    })
    setImagename(null)
  }


  const handleimages = (file) => {
    setformData({ ...formData, selectedFile: file.base64})
    setImagename(file.name);
    console.log(file)
  }


  return (
    <div className="home_box2">
      <form onSubmit={handlesubmit} className="memory_form text-center">
        <h5 className="text-center">{currentId ? "Update":"Create"} Memory</h5>
      <input type="text" 
      placeholder="Creator" 
      className="block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full" 
      onChange={(e) => setformData({ ...formData, creator: e.target.value})} 
      value={formData.creator} required />

      <input type="text" 
      placeholder="Title" 
      className="block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full" 
      onChange={(e) => setformData({ ...formData, title: e.target.value})} 
      value={formData.title} required />

      <textarea 
       className="block my-2 outline-none bg-black border-2 rounded p-1 border-white h-24 w-full"  
      placeholder="Message"
      onChange={(e) => setformData({ ...formData, message: e.target.value})} 
      value={formData.message} required />
      
        <div className="position-relative border border-2 my-1 py-2" style={{ background: "#5FC2FF", color:"black", fontWeight:"600"}}>
          <span className="w-full block p-2 text-center text-xs">{imgname? imgname:"Select Memory Image"} </span>

          <div className="position-absolute fixed-top opacity_none">
          <FileBase64 
            multiple={ false }         
            onDone={handleimages}       
          />
        </div>
        </div>

      <input type="submit" value="submit" className="submit block rounded py-1 px-2 my-2 "/>
    </form>
    </div>
  )
}

export default Form
