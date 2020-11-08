import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import CardDetailsReaducer from "./CardDetailReducer";
// import { createUser } from "../actions";
// let cards=[
//     { title: "dal and rice",type:"veg",category:"raw",state:"dry",date:"18-07-20", quantity: "2", expired: false, rating: "3", other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//     { title: "rajma rice",type:"non-veg",category:"raw",state:"dry",date:"18-07-20", quantity: "8", expired: true, rating: "3", other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//     { title: "poha",type:"veg",category:"raw",state:"dry",date:"18-07-20", quantity: "2", expired: false, rating: "3", other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//     { title: "mix veg",type:"non-veg",category:"raw",state:"dry",date:"18-07-20", quantity: "1", expired: true, rating: "3", other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//     { title: "palak paneer",type:"veg",category:"raw",state:"dry",date:"18-07-20", quantity: "7", expired: false, rating: "3", other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//     { title: "soup",type:"non-veg",category:"raw",state:"dry",date:"18-07-20", quantity: "6", expired: true, rating: "3", other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//     { title: "pizza",type:"veg",category:"raw",state:"dry",date:"18-07-20", quantity: "1", expired: false, rating: "3", other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//     { title: "ice cream",type:"non-veg",category:"raw",state:"dry",date:"18-07-20", quantity: "3", expired: true, rating: "3", other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//     { title: "kulfi falooda",type:"veg",category:"raw",state:"dry",date:"18-07-20", quantity: "5", expired: false, rating: "3", other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    
// ]
// const cardDetailsReaducer = (state={},action) => {
//     if(action.type==="CREATE_CARD"){
//         console.log("new cards: ",action.payload.values)
//         cards=[...cards,action.payload.values];
//         console.log("cards: ",cards);
//         return state;
//     }
//     else{
//         return cards;
//     }  
// }



// Create User
// const userDetailsReducer = (state={},action)=>{
//     if(action.type==="CREATE_USER"){
//         console.log(action.payload);
//         return action.payload;
//     }
//     else{
//         return state;
//     }
// }


export default combineReducers({
    form:formReducer,
    cardDetails: CardDetailsReaducer,
    // userDetails: userDetailsReducer,
    // card: createCardReducer
    // carouselFact: carouselReducer
});

