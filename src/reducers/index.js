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