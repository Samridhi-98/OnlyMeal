//USER ACTIONCREATOR
export const ADD_USER = "CREATE_USER";
// export const createUser = (values) => {
//     return ({
//         type: ADD_USER,
//         payload: {
//             values: values
//         }
//     });
// }
//------------------------------------------------------------------------------------------------------
import axios from "../axios/axios";
const _addUser = user => ({
    type: ADD_USER,
    user
})

export const addUser = (userData = {
    Username: "",
    email: "",
    password: "",
    phone: ""
}) => {
    return (dispatch) => {
        const user = {
            Username: userData.Username,
            email: userData.email,
            password: userData.password,
            phone: userData.phone
        };
        return axios.post('/dashboard', user).then(result => (dispatch(_addUser(result.data))));
    }
}


//-------------------------------------------------------------------------------------------------------
//CARD ACTION CREATOR
export const ADD_DETAILS = "CREATE_CARD_DETAILS";
export const createCard = (values) => {

    return ({
        type: ADD_DETAILS,
        payload: {
            values: values
        }
    });
}