export const createUser =(values)=> {
    return( {
        type:'CREATE_USER',
        payload:{
            values:values
        }
    });
}
export const ADD_DETAILS="CREATE_CARD_DETAILS";
export const createCard =(values)=> {
    
    return( {
        type:ADD_DETAILS,
        payload:{
            values:values
        }
    });
}