import { combineReducers } from "redux";
import { posts, postsId } from "./postReducer";
import { auth } from "./AuthReducer";

export const rootReducers = combineReducers({
  posts,
  postsId,
  auth
});