//USER ACTIONCREATOR
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const USER_LOADING = "USER_LOADING";
export const GET_ERRORS = "GET_ERRORS";

export const ADD_USER = "CREATE_USER";
export const createUser = (values) => {
    return ({
        type: ADD_USER,
        payload: {
            values: values
        }
    });
}

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

//Initialize cards in dashboard
export const FILL_DASHBOARD = "FILL_DASHBOARD";
export const fillDashboard = (values)=>{
    return({
        type:FILL_DASHBOARD,
        payload:values
        
    })
}