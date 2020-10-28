import { combineReducers } from "redux";

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

// const userDetails = () =>{
//     return(
//         [
//             {name:"alex",email:"a@mail.com",password:"abcd",phoneno:"9876543210"},
//             {name:"blex",email:"b@mail.com",password:"abcd",phoneno:"9876543210"},
//             {name:"clex",email:"c@mail.com",password:"abcd",phoneno:"9876543210"},
//             {name:"dlex",email:"d@mail.com",password:"abcd",phoneno:"9876543210"},
//         ]
//     )
// }

// const carouselReducer = () => {
//     return (
//         [
//             { title: "dal and rice", quantity: "2kg", expired: false, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
//             { title: "fries", quantity: "2kg", expired: false, rating: "3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
//         ]
//     )
// }

export default combineReducers({
    cardDetails: cardDetailsReaducer,
    // carouselFact: carouselReducer
});