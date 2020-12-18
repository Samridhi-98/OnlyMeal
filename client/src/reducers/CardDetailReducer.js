import { ADD_DETAILS, FILL_DASHBOARD } from "../actions/index";
import axios from "axios";

export default function (state = [], action) {
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
      return state;

    case FILL_DASHBOARD:
      console.log("for dashboard", action.payload);
      state = action.payload;
      return state;
    default:
      console.log("running",state);
      return state;
  }
}
