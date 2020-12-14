import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

//IMPORT REDUCERS
import authReducer from "./AuthReducer";
import errorReducer from "./ErrorReducer";
import CardDetailsReducer from "./CardDetailReducer";

//COMBINE REDUCERS
export default combineReducers({
    form: formReducer,
    cardDetails: CardDetailsReducer,
    authDetails: authReducer,
    errorDetails: errorReducer
});

