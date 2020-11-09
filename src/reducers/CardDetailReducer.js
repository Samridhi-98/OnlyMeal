import { ADD_DETAILS } from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case ADD_DETAILS:
            console.log("from reducer: ", action.payload.values);
            return [action.payload.values, ...state];
        default:
            return state;
    }
}