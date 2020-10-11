import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


// Semantic-ui react
import { Item, Label, Segment, Container, Grid, Rating } from "semantic-ui-react";
// Image
import cardImg from "../../images/minion_card.svg";

//CSS
import "../../css/master.css";
import FoodInfo from "./FoodInfo";

class Dashboard extends React.Component {
 
  render() {

    const cardList = this.props.cardDetails.map((cardDetail) => {
      return (
        <Grid.Column>
          <Segment className="details">
            <Item.Group divided>
              <Item >
                <Item.Image size="small" src={cardImg} />
                <Item.Content>
                  <Item.Header >{cardDetail.title}</Item.Header>
                  <Item.Meta>{cardDetail.quantity}</Item.Meta>
                  <Item.Description>
                    <p>
                      {cardDetail.description}
                    </p>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
      );
    });
    return (
      <div >
        <Container className="dashboard ">
          <Grid columns={2}>
            <Grid.Row className="ui stackable doubling">
                {cardList}
            </Grid.Row>
            
          </Grid>
          
        </Container>
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
