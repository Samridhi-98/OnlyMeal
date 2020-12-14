import { GET_ERRORS } from "../actions/index";

const initialState = {};

export default (state = initialState, action)=>{
  //console.log("------------error aa gayi yaar :(-----------");
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}