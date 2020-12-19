import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";
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
  state={
    recieveCards:[],
    donateCards:[]
  }
  
  componentDidMount(){
    this.cardDetails(this.props.authDetails.user.id, "recieve");
    this.cardDetails(this.props.authDetails.user.id, "donate");
  }
  
  cardDetails(id, reqType) {
    console.log("profile client id: ", id);
    let renderCards;
    //! sending data with GET is by appending it to the end
    Axios({
      url: "/api/" + reqType + "/" + id, //! <= here
      method: "GET",
    })
      .then((response) => {
        (reqType==="donate") ? this.setState({donateCards:response.data}) : this.setState({recieveCards:response.data})  
      })
      .catch((err) => {
        console.log("error occured while recieving from profile", err);
      });
      return renderCards;
  }

  render() {
    //---------------------------
    //? Rendering  reciever cards
    // --------------------------
    const recieverCards = this.state.recieveCards.map((card) => {
      return (
        <Grid.Column>
          <Segment>
            <Item.Group divided>
              <Item>
                <Item.Image size="small" src={cardImg} />
                <Item.Content>
                  {console.log("title: ",card.title)}
                  {console.log("quantity: ",card.quantity)}
                  <Item.Header>{card.title}</Item.Header>
                  <Item.Meta>{card.quantity}KG</Item.Meta>
                  <Item.Description>
                    {console.log("other: ",card.other)}
                    <p>{card.other}</p>
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
      );
    });

    //---------------------------
    //? Rendering donation cards
    // --------------------------

    const donationCards = this.state.donateCards.map((card) => {
      return (
        <Grid.Column>
          <Segment>
            <Item.Group divided>
              <Item>
                <Item.Image size="small" src={cardImg} />
                <Item.Content>
                  {console.log("title: ",card.title)}
                  {console.log("quantity: ",card.quantity)}
                  <Item.Header>{card.title}</Item.Header>
                  <Item.Meta>{card.quantity}KG</Item.Meta>
                  <Item.Description>
                    {console.log("other: ",card.other)}
                    <p>{card.other}</p>
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
      );
    });

    return (
      <div className="profile">
        <div>
          <Navbar />
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

                {donationCards}
                
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment>
            <Label className="mid-titile" as="a" color="red" ribbon size="big">
              Recieved
            </Label>
            <Grid className="mid-grid" columns={2}>
              <Grid.Row className="ui stackable doubling">
                
                {recieverCards}
                
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
  };
};
export default connect(mapStateToProp)(Profile);
