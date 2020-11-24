import { ADD_DETAILS } from "../actions/index";
import axios from "axios";
export default function (state = [], action) {
    switch (action.type) {
        case ADD_DETAILS:
            console.log("from reducer: ", action.payload.values);
            axios({
                url:"/save",
                method:"POST",
                data: action.payload.values
              }).then(()=>{
                console.log("data has been set to the server");
              }).catch(()=>{
                console.log("error occured on the client side");
            })
            return [action.payload.values, ...state];
        default:
            return state;
    }
}