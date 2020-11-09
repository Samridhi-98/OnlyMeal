import { ADD_USER } from "../actions/index";

export default function (state = [], action) {
    if (action.type === ADD_USER) {
        console.log("USER: ", action.payload.values);
        return [action.payload.values, ...state];
    }
    return state;
}