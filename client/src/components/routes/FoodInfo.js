import React from "react";
import Axios from "axios";
//Semantic-UI
import { Container, Header, Item, Segment, TextArea, Form, Button, TransitionablePortal } from "semantic-ui-react";

//REACT-REDUX 
import { connect } from "react-redux";
// import { Link } from "react-router-dom";


// Image
import minion_luv from "../../images/cage.jpg";

//NAVBAR
import Navbar from "./Navbar";

// CSS
import "../../css/master.css";

class FoodInfo extends React.Component {
  state = { animation: "zoom", duration: 500, open: false,card:null}

  handleClose = () => this.setState({ open: false })
  handleOpen = () => this.setState({ open: true })

  constructor() {
    super();
    console.log("chala componenet ==========>");
    Axios({
      url: "/api/foodinfo/",
      method: "GET",
    })
      .then((response) => {
        this.setState({card:response.data})  
      })
      .catch((err) => {
        console.log("error occured while recieving from foodInfo", err);
      });
  }

  render = () => {
    const { open, animation, duration } = this.state
    return (
      
      <Container className="foodinfo">
        <Navbar/>  
        <div>
          <Header icon textAlign="center">
            <Header.Content className="title">{this.state.card.title}</Header.Content>
          </Header>
        </div>
        <Segment className="details">
          <Item.Group>
            <Item>
              <Item.Image size="medium" src={minion_luv} />

              <Item.Content>
                <Item.Description className="description">
                  <h2 className="ui dividing header">Food Descriptions</h2>

                  <p className="">
                    <strong>Type: </strong> {this.state.card.type} &nbsp; &nbsp;
                    <strong>Category: </strong> {this.state.card.category} &nbsp; &nbsp;
                    <strong>State: </strong> {this.state.card.state} &nbsp; &nbsp;
                    <br />
                  </p>
                  <p className="">
                    <strong>Type: </strong> Veg. &nbsp; &nbsp;
                    <strong>Category: </strong> Cooked &nbsp; &nbsp;
                    <strong>State: </strong> Wet &nbsp; &nbsp;
                    <br />
                    <br />
                  </p>
                  <h2 className="ui dividing header">Contact Details</h2>
                  <p>
                    <strong>Phone No: </strong> {this.state.card.phoneno} &nbsp; &nbsp;
                    <br />
                    <strong>Email: </strong> {this.state.card.email} &nbsp; &nbsp;
                    <br />
                    <strong>City: </strong> {this.state.card.city}  &nbsp; &nbsp;
                    <strong>PIN Code: </strong> {this.state.card.pincode}  &nbsp; &nbsp;
                    <br />
                  </p>
                </Item.Description>
                <Item.Extra>Additional Details</Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content>
                <Item.Description>
                  <h2 className="ui dividing header">Address</h2>
                  <Form>
                    <TextArea
                      value={this.state.card.type}
                    />
                  </Form>
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content>
                <Button
                  content='Open Request'
                  disabled={open}
                  positive
                  onClick={this.handleOpen}
                />
                <TransitionablePortal onClose={this.handleClose} open={open} transition={{ animation, duration }}>
                  <Segment
                    style={{
                      left: '40vw',
                      position: 'fixed',
                      top: '50%',
                      zIndex: 1000,
                    }}
                  >
                    <Header>Your Referal Code: <em>12345</em> </Header>
                    <Button
                      content='Close Request'
                      negative
                      onClick={this.handleClose}
                    />
                  </Segment>
                </TransitionablePortal>


              </Item.Content>
            </Item>
          </Item.Group>

        </Segment>
      </Container>
    );
  };
}

//GETTING DATA FROM REACT
const mapStateToProp = (state) => {
  return {
    cardDetails: state.cardDetails,
  };
};

export default connect(mapStateToProp)(FoodInfo);

