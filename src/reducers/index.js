import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
// import { createUser } from "../actions";

const cardDetailsReaducer = () => {
    return (
        [
            { title: "dal and rice", quantity: "2kg", expired: false, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
            { title: "fries", quantity: "2kg", expired: false, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
            { title: "dal", quantity: "2kg", expired: true, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
            { title: "parathas", quantity: "2kg", expired: false, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
            { title: "curry", quantity: "2kg", expired: true, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
            { title: "curry", quantity: "2kg", expired: false, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
            { title: "curry", quantity: "2kg", expired: true, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
            { title: "curry", quantity: "2kg", expired: false, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
            { title: "curry", quantity: "2kg", expired: true, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
        ]
    )
}

const userDetailsReducer = (state={},action)=>{
    if(action.type==="CREATE_USER"){
        console.log(action.payload);
        return action.payload;
    }
    else{
        return state;
    }
}


export default combineReducers({
    form:formReducer,
    cardDetails: cardDetailsReaducer,
    userDetails: userDetailsReducer
    // carouselFact: carouselReducer
});

