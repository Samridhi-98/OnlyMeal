import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Rating } from "semantic-ui-react";

// Image
import cardImg from "../../images/minion_card.svg";

//CSS
import "../../css/master.css";
import FoodInfo from "./FoodInfo";

class Dashboard extends React.Component {
  renderCardsList() {
    const cardList = this.props.cardDetails.map((cardDetail) => {
      return (
        // --------------------------- C A R D S ---------------------------------------
        <div className="card">
          <div className="content">
            <div className="ui grid stackable doubling">
              <div className="six wide column image">
                <img className="right floated large ui image" alt={cardDetail.title} src={cardImg}></img>
              </div>
              <div className="ten wide column">
                <div className="">
                  <h3>{cardDetail.title.toUpperCase()}</h3>
                </div>
                <div className="meta">{cardDetail.quantity}</div>
                <div className="description">{cardDetail.description}</div>
              </div>
            </div>
          </div>

          <div className="extra ">
            <Rating icon="star" defaultRating={3} maxRating={4} />
            <div
              className="ui heart rating"
              data-rating="1"
              data-max-rating="3"
            ></div>

            <span className="right floated " onClick={<FoodInfo/>}>
              <Link to="/foodinfo"> 
                {cardDetail.expired === true ? (<i className="close icon red "></i>) : (<i className="check circle icon blue"></i>)}
              </Link>

            </span>
          </div>
        </div>
        //---------------------------------------------------------------------------
      );
    });
    return cardList;
  }
  render() {
    // console.log(this.props.cardDetails);
    return (
      <div className="dashboard ui grid container">
        <div className="row">
          <div className="sixteen wide column content">
            <div className="ui segment row facts">
              <h1>food facts</h1>
              <p>

                shishye is sad even though senpai made so much efforts to make
                her happy and she is also not eating..... i wonder why she is
                like that sometimes although i was thinking about owning a
                skeleton and now i have one....
                <br />
              </p>
            </div>
            <div className="ui cards two stackable doubling">
              {this.renderCardsList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    cardDetails: state.cardDetails,
  };
};

export default connect(mapStateToProp)(Dashboard);
