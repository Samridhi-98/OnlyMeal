import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

//IMPORT REDUCERS
import UserReducer from "./UserReducer";
import CardDetailsReducer from "./CardDetailReducer";

//COMBINE REDUCERS
export default combineReducers({
    form: formReducer,
    cardDetails: CardDetailsReducer,
    userDetails: UserReducer
});

