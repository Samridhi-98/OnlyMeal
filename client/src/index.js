import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//react-redux
import {Provider} from "react-redux";
import {createStore} from "redux";
//reducer
import reducers from "./reducers/index";

// const Index = () => {
//     return ( < App / > );
// }


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);