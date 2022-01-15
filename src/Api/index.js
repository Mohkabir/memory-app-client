import axios from "axios";

const url = "http://localhost:5000/posts";

const API = axios.create({baseURL: "http://localhost:5000"});

  API.interceptors.request.use((req) => {
    if(localStorage.getItem("auth")){
      req.headers.Autorization = `Bearer ${JSON.parse(localStorage.getItem("auth")).token}`;
    }
    return req;
  })

export const fetchPostapi = () => API.get("/posts");
export const createPostapi = (formData) => API.post("/posts", formData);
export const updatePostapi = (Id, updatedPost)=> API.patch(`/posts/${Id}`, updatedPost);
export const deletePostapi = (Id) => API.delete(`/posts/${Id}`);
export const likePostapi = (Id) => API.patch(`/posts/${Id}/like`);

export const loginApi = (formdata) => API.post(`/users/signin`, formdata);
export const signupApi = (formdata) => API.post(`/users/signup`, formdata);