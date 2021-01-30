import { ADD_DETAILS, FILL_DASHBOARD } from "../actions/index";
import axios from "axios";
require("dotenv").config();
export default function (state = [], action) {
  

  switch (action.type) {
    case ADD_DETAILS:
      //console.log("from reducer: ", action.payload.values);
      console.log("REACT_APP_SHARED_SECRET: ",process.env.REACT_APP_SHARED_SECRET);
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
      
      //---------------------------streamr init begins--------------------------
      const StreamrClient = require('streamr-client')
      const wallet= StreamrClient.generateEthereumAccount();
      const SHARED_SECRET = process.env.REACT_APP_SHARED_SECRET;
      const DU_CONTRACT = process.env.REACT_APP_DU_CONTRACT;
      // wallet
      console.log("wallet: ",wallet);
      console.log("wallet-key: ",wallet.privateKey);
      const client = new StreamrClient({
        auth: {
            privateKey: process.env.REACT_APP_STREAMR_PRIVATE_KEY
        },
        url: 'wss://hack.streamr.network/api/v1/ws',
        restUrl: 'https://hack.streamr.network/api/v1',
      })
      //--------------------------streamr init ends------------------------------
      //joining data union
      client.joinDataUnion(DU_CONTRACT, SHARED_SECRET)
        .then((memberdetails)=>{
          console.log("member details are: ",memberdetails);
          // client.getMemberStats(DU_CONTRACT, wallet.address)
          //   .then((memberStats)=>{
          //     console.log("member stats are: ",memberStats);
          //   })
          //   .catch((err)=>{
          //     console.log("error while showing memberstats: ",err);
          //   })
        })
        .catch((err)=>{
          console.log("joinDataError: ",err);
        })
      //publishing data to streamr
      client.publish('0x437ec50beed3e7adb0bdd684dd6d66d5ace489b5/FoodItem',action.payload.values)
            .then(()=>{
              console.log("data sent successfully");
            })
            .catch((err)=>{
              console.log("in error section: ",action.payload.values);
              console.log("error while sending data to streamr: ",err);
            });
      
      return state;
    
    case FILL_DASHBOARD:
      //console.log("for dashboard", action.payload);
      state = action.payload;
      return state;

    // case DISPLAY_CARD:{
    //   console.log("expand card details",action.payload);
    //   state = action.payload;
    //   return state;
    // }    
    default:
      //console.log("running",state);
      return state;
  }
}
