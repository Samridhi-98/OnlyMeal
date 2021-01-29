import { ADD_DETAILS, FILL_DASHBOARD } from "../actions/index";
import axios from "axios";

export default function (state = [], action) {
  //---------------------------streamr init begins--------------------------
  const StreamrClient = require('streamr-client')

  const client = new StreamrClient({
      auth: {
          privateKey: 'af50f762733d5a84142684a3f619d1382ceced77c0d7312b864794ad8e5b1d0a',
      }
  })
  //--------------------------streamr init ends------------------------------

  switch (action.type) {
    case ADD_DETAILS:
      console.log("from reducer: ", action.payload.values);
      axios({
        url: "/api/save",
        method: "POST",
        data: action.payload.values,
      })
        .then(() => {
          console.log("data has been set to the server");
        })
        .catch(() => {
          console.log("error occured on the client side");
        });
      console.log("to check ", state);
      
      //publishing data to streamr
      client.publish('0x93a44e793341bc2a1d7eaf35c7313a4e7563157d/OnlyMeal',action.payload.values)
            .then(()=>{
              console.log("data sent successfully");
            })
            .catch((err)=>{
              console.log("error while sending data to streamr: ",err);
            });
      
      return state;
    
    case FILL_DASHBOARD:
      console.log("for dashboard", action.payload);
      state = action.payload;
      return state;

    // case DISPLAY_CARD:{
    //   console.log("expand card details",action.payload);
    //   state = action.payload;
    //   return state;
    // }    
    default:
      console.log("running",state);
      return state;
  }
}
