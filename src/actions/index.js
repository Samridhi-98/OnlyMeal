export const createUser =(values)=> {
    return( {
        type:'CREATE_USER',
        payload:{
            values:values
        }
    });
}