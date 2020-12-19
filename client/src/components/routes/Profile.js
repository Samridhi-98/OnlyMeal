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
  cardDetails(id) {
    console.log("profile client id: ",id);
    Axios({
      url:"/api/recieve",
      method:"GET",
      params:{
        data:id
      }
    })
    .then((response)=>{
      console.log("from profile: ",response.data);
    })
    .catch((err)=>{
      console.log("error occured while recieving from profile",err);
    })
    // const renderCards=id.map((card) => {
    //   return (
    //     <Grid.Column>
    //       <Segment>
    //         <Item.Group divided>
    //           <Item>
    //             <Item.Image size="small" src={cardImg} />
    //             <Item.Content>
    //               <Item.Header>{card.title}</Item.Header>
    //               <Item.Meta>{card.quantity}KG</Item.Meta>
    //               <Item.Description>
    //                 <p>
    //                   {card.other}
    //                 </p>
    //               </Item.Description>
    //               <Item.Extra>
    //                 <Rating
    //                   className="rating-star"
    //                   icon="star"
    //                   defaultRating={3}
    //                   maxRating={5}
    //                 />
    //               </Item.Extra>
    //             </Item.Content>
    //           </Item>
    //         </Item.Group>
    //       </Segment>
    //     </Grid.Column>
    //   );
    // });
    // return renderCards;
  }
  render() {
  
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
                
                {this.cardDetails(this.props.authDetails.user.id)}
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment>
            <Label className="mid-titile" as="a" color="red" ribbon size="big">
              Recieved
            </Label>
            <Grid className="mid-grid" columns={2}>
              <Grid.Row className="ui stackable doubling">
                {/*  */}
                {this.cardDetails(this.props.authDetails.user.id)}
                {console.log("recieved data: ",this.props.authDetails.user.recieved)}
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
