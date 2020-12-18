import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// SEMANTIC UI REACT
import {
  Container,
  Segment,
  Image,
  Header,
  Label,
  Item,
  Rating,
  Grid,
} from "semantic-ui-react";

//IMAGES
import snow_cat from "../../images/profile/displaypic/cup.svg";
import donate from "../../images/profile/tags/donate.svg";
import banned from "../../images/profile/tags/banned.svg";
import consume from "../../images/profile/tags/consume.svg";
import cardImg from "../../images/minion_card.svg";

//NAVBAR
import Navbar from "./Navbar";

class Profile extends React.Component {
  render() {
    const email = this.props.authDetails.user.email;
    console.log("cardDetails=> ", this.props.cardDetails);
    const cardList = this.props.cardDetails.map((cardDetail) => {
      console.log("cardDetail user emial=> ", cardDetail.email);
      if (cardDetail.email === email) {
        console.log("cardDetail is: ", cardDetail);
        return (
          <Grid.Column>
            <Segment>
              <Item.Group divided>
                <Item>
                  <Item.Image size="small" src={cardImg} />

                  <Item.Content>
                    <Item.Header>
                      {cardDetail.title}
                      <Label
                        color={cardDetail.type === "veg" ? "green" : "red"}
                        attached="top right"
                      >
                        {cardDetail.type}
                      </Label>
                    </Item.Header>
                    <Item.Description>
                      <Label.Group>
                        <Label className="labelcolor">
                          {cardDetail.quantity}KG
                        </Label>
                        <Label>{cardDetail.category}</Label>
                        <Label>{cardDetail.state}</Label>
                      </Label.Group>
                    </Item.Description>

                    {/* <Item.Meta>{cardDetail.date}</Item.Meta> */}
                    {/* <Item.Meta>{cardDetail.quantity}</Item.Meta> */}
                    <Item.Description>
                      <p>{cardDetail.other}</p>
                    </Item.Description>
                    <Item.Extra>
                      <Link
                        className={
                          cardDetail.expired
                            ? "mini ui red button"
                            : "mini ui green button"
                        }
                        to={cardDetail.expired ? "/dashboard" : "/foodinfo"}
                      >
                        {cardDetail.expired ? "Expired" : "Available"}
                      </Link>
                      <Rating
                        className="rating-star"
                        icon="star"
                        defaultRating={3}
                        maxRating={5}
                      />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Grid.Column>
        );
      }
    });
    return (
      <div className="profile">
        <div>
          {" "}
          <Navbar />{" "}
        </div>
        <Container>
          <Segment className="profile-top">
            <Header as="h1" icon textAlign="center">
              <Image className="" src={snow_cat} />
              <Header.Content className="header-content">
                {this.props.authDetails.user.name}
                <Header className="meta" as="h4" disabled>
                  Good Morning People !! XD
                </Header>
              </Header.Content>
            </Header>
            <Image.Group size="mini">
              <Image className="icons" src={donate} />
              <Image className="icons" src={consume} />
              <Image className="icons" src={banned} />
            </Image.Group>
          </Segment>
          {/* Profile Middle */}
          <Segment>
            <Label
              className="mid-titile"
              as="a"
              color="green"
              ribbon
              size="big"
            >
              Donated
            </Label>
            <Grid className="mid-grid" columns={2}>
              <Grid.Row className="ui stackable doubling">
                {console.log("cardlist: ", cardList)}
                {cardList}
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment>
            <Label className="mid-titile" as="a" color="red" ribbon size="big">
              Recieved
            </Label>
            <Grid className="mid-grid" columns={2}>
              <Grid.Row className="ui stackable doubling">
                <Grid.Column>
                  <Segment>
                    <Item.Group divided>
                      <Item>
                        <Item.Image size="small" src={cardImg} />
                        <Item.Content>
                          <Item.Header>Rajma Rice</Item.Header>
                          <Item.Meta>10kg</Item.Meta>
                          <Item.Description>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s
                            </p>
                          </Item.Description>
                          <Item.Extra>
                            <Rating
                              className="rating-star"
                              icon="star"
                              defaultRating={3}
                              maxRating={5}
                            />
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                </Grid.Column>

                {/*  */}

                <Grid.Column>
                  <Segment>
                    <Item.Group divided>
                      <Item>
                        <Item.Image size="small" src={cardImg} />
                        <Item.Content>
                          <Item.Header>Rajma Rice</Item.Header>
                          <Item.Meta>10kg</Item.Meta>
                          <Item.Description>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s
                            </p>
                          </Item.Description>
                          <Item.Extra>
                            <Rating
                              className="rating-star"
                              icon="star"
                              defaultRating={3}
                              maxRating={5}
                            />
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    authDetails: state.authDetails,
    cardDetails: state.cardDetails,
  };
};
export default connect(mapStateToProp)(Profile);
