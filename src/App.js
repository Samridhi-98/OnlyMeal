import React from "react";
import { BrowserRouter, Route} from "react-router-dom";


// routes
import MenuSidebar from "./components/routes/MenuSidebar";
import CreateAvail from "./components/routes/CreateAvail";

import Main from "./components/routes/Main";


//CSS
import "./css/master.css";

const App = () => {
  return (
    // ------------------------------------------------------------------------
    <BrowserRouter>
      <div className="parent">
        <div className="">
          <Route path="/" exact component={Main}/>
        </div>
      </div>
      <div>
          <Route path="/MenuSidebar" component={MenuSidebar}/>
      </div>
     
    </BrowserRouter>
  );
};

export default App;
