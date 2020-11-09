import React from "react";

//REACT-REDUX 
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//CAROUSEL
import Carousel from "../../CarouselCard";

//SEMANTIC-UI-REACT
import { Item, Segment, Container, Grid, Rating, Label } from "semantic-ui-react";

// IMAGE
import cardImg from "../../images/food1.jpg";

//CSS
import "../../css/master.css";


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
                  <Item.Header>{cardDetail.title}
                    <Label color={(cardDetail.type === "veg") ? "green" : "red"} attached="top right">{cardDetail.type}
                    </Label>
                  </Item.Header>
                  <Item.Description>
                    <Label.Group>
                      <Label className="labelcolor">{cardDetail.quantity}KG</Label>
                      <Label>{cardDetail.category}</Label>
                      <Label>{cardDetail.state}</Label>
                    </Label.Group>
                  </Item.Description>

                  {/* <Item.Meta>{cardDetail.date}</Item.Meta> */}
                  {/* <Item.Meta>{cardDetail.quantity}</Item.Meta> */}
                  <Item.Description>

                    <p>
                      {cardDetail.other}
                    </p>
                  </Item.Description>
                  <Item.Extra>
                    <Link className={cardDetail.expired ? "mini ui red button" : "mini ui green button"} to={cardDetail.expired ? "/dashboard" : "/foodinfo"}>{cardDetail.expired ? 'Expired' : 'Available'}</Link>
                    <Rating className="rating-star" icon='star' defaultRating={3} maxRating={5} />
                  </Item.Extra>
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
          {/* <Segment> */}
          <Carousel />
          {/* </Segment> */}
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

//GETTING DATA FROM REACT
const mapStateToProp = (state) => {
  return {
    cardDetails: state.cardDetails,
    // carouselFact: state.carouselFact
  };
};

export default connect(mapStateToProp)(Dashboard);
