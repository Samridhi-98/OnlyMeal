import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//react-redux
import {Provider} from "react-redux";
//import {createStore} from "redux";
//reducer
//import reducers from "./reducers/index";

import store from  "./store";

// const Index = () => {
//     return ( < App / > );
// }


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);