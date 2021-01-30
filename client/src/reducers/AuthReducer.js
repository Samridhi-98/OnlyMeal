import {USER_LOADING,SET_CURRENT_USER} from  "../actions/index";
const isEmpty=require("is-empty");

const initialState={
  isAuthenticated:false,
  user:{},
  loading:false 
}
export default (state=initialState,action)=>{
  switch (action.type){
    case SET_CURRENT_USER:
      //console.log("set_current_user",action.payload);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    
    case USER_LOADING:
      return{
        ...state,
        loading:true
      };
    
    default:
      return state;  
  }
}