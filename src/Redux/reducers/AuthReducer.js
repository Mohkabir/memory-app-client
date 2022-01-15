import * as actiontypes from "../actionTypes";

export const auth = (state = {authdata: null}, action) => {
  switch (action.type) {
    case actiontypes.AUTH :
      localStorage.setItem("auth", JSON.stringify(action?.payload));
      return { ...state, athdata: "loggedIn"}
      break;
      case actiontypes.LOG_OUT:
        localStorage.clear();
      return {...state, authdata: null}
      ;
      break;
      case actiontypes.SIGN_IN:
        localStorage.setItem("auth", JSON.stringify(action?.payload));
      return {...state, authdata: action?.payload}
      ;
      case actiontypes.SIGN_UP:
      // localStorage.setItem("auth", JSON.stringify(action?.payload));
      return {...state, athdata: "signedUp"}
      ;
      
    default:
      return state
      break;
  }
}