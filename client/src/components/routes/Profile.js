import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
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
  Loader,
  Popup
} from "semantic-ui-react";

//IMAGES
import donate from "../../images/profile/tags/donate.svg";
import banned from "../../images/profile/tags/banned.svg";
import consume from "../../images/profile/tags/consume.svg";
import donateFiller from "../../images/empty/donate.svg";
import recieveFiller from "../../images/empty/recieve.svg";


//NAVBAR
import Navbar from "./Navbar";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const img=alphabet[Math.floor(Math.random() * alphabet.length)]

//! LINK: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
const profileImage=require("../../images/profile/displaypic/"+img+".svg")

const IMG=(imgName)=>{
    return require(`../../images/cardimg/${imgName}`)
};
//? good wishes message for profile tag line
const quotes = ["Good food is a good mood.",
                "Coffee is a hug in a mug.",
                "Joey doesn't share food, but you should.",
                "Life is a combination of magic and pasta.",
                "The belly rules the mind."
              ];

class Profile extends React.Component {
  state = {
    recieveCards: [],
    donateCards: [],
    loading: true,
  };

  componentDidMount() {
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
        reqType === "donate"
          ? this.setState({ donateCards: response.data })
          : this.setState({ recieveCards: response.data });
        if (reqType === "donate") this.setState({ loading: false });
      })
      .catch((err) => {
        console.log("error occured while recieving from profile", err);
      });
    return renderCards;
  }

  //? empty section place holder
  filler(type){
    console.log("filler called for"+type);
    if(type === "donate"){
      return(
        <Image size="small" centered src={donateFiller}/>
      )
    }
    return <Image size="small" centered src={recieveFiller}/>
    
  } 
  render() {
    if (this.state.loading) {
      return(
        <div>
          <Loader size="large" active>
            <strong> Loading</strong>
          </Loader>
        </div>
      ) 
    } 
    else {
      //---------------------------
      //? Rendering  reciever cards
      // --------------------------
      const recieverCards = this.state.recieveCards.map((card) => {
        return (
          <Grid.Column>
          <Segment raised className="details">
            <Item.Group divided>
              <Item >
                <Item.Image 
                  size="small" 
                  src={require(`../../images/cardimg/${card.image}`)}
                />
                <Item.Content>
                  <Item.Header>{(card.title).toUpperCase()} 
                    <Label color={(card.type === "Veg") ? "green" : "red"} attached="top right">{card.type}
                    </Label>
                  </Item.Header>
                  <Item.Description>
                    <Label.Group>
                      <Label className="labelcolor">{card.quantity}KG</Label>
                      <Label>{card.category}</Label>
                      <Label>{card.state}</Label>
                    </Label.Group>
                  </Item.Description>
                  <Item.Description>
                    <p>
                    <Header className="meta">
                      <em>{card.other}</em>
                      </Header>
                    </p>
                  </Item.Description>
                  <Item.Extra>
                      <Rating
                        className="rating-star"
                        icon="star"
                        size="huge"
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
      //<Item.Image size="small" src={IMG(card.image)} />
      const donationCards = this.state.donateCards.map((card) => {
        return (
          <Grid.Column>
          <Segment raised className="details">
            <Item.Group divided>
              <Item >
              <Item.Image size="small" src={IMG(card.image)} />
                <Item.Content>
                  <Item.Header>{(card.title).toUpperCase()} 
                    <Label color={(card.type === "Veg") ? "green" : "red"} attached="top right">{card.type}
                    </Label>
                  </Item.Header>
                  <Item.Description>
                    <Label.Group>
                      <Label className="labelcolor">{card.quantity}KG</Label>
                      <Label>{card.category}</Label>
                      <Label>{card.state}</Label>
                    </Label.Group>
                  </Item.Description>
                  <Item.Description>
                    <p>
                    <Header className="meta">
                      <em>{card.other}</em>
                    </Header>
                    </p>
                  </Item.Description>
                  <Item.Extra>
                      <Rating
                        className="rating-star"
                        icon="star"
                        size="huge"
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
            <Segment raised className="profile-top">
              <Header as="h1" icon textAlign="center">
                <Image className="" src={profileImage} />
                <Header.Content className="header-content">
                {(this.props.authDetails.user.name).toUpperCase()}
                  <Header className="meta" as="h4" disabled>
                    <em>{quotes[Math.floor(Math.random() * quotes.length)]}</em>
                  </Header>
                </Header.Content>
              </Header>
              <Image.Group size="mini">
               <Popup content='Donate' position="bottom center" size="tiny"  trigger={<Image className="icons" src={donate} />} />
               <Popup content='Consume'position="bottom center" size="tiny" trigger={<Image className="icons" src={consume} />} />
               <Popup content='Banned' position="bottom center" size="tiny" trigger={ <Image className="icons" src={banned} />} />
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
                  {(donationCards.length===0) ? this.filler("donate") : "" }   
                </Grid.Row>
              </Grid>
            </Segment>

            <Segment >
              <Label
                className="mid-titile"
                as="a"
                color="red"
                ribbon
                size="big"
              >
                Recieved
              </Label>
              <Grid className="mid-grid" columns={2}>
                <Grid.Row className="ui stackable doubling">
                  {console.log("---recieve cards length : ",recieverCards.length)}
                  {recieverCards}
                  {(recieverCards.length===0) ? this.filler("recieve") : "" }
                </Grid.Row>
              </Grid>
            </Segment>
          </Container>
        </div>
      );
    }
  }
}
const mapStateToProp = (state) => {
  return {
    authDetails: state.authDetails,
  };
};
export default connect(mapStateToProp)(Profile);
