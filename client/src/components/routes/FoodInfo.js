import React from "react";
import Axios from "axios";

//Semantic-UI
import { Container, Header,Loader, Item, Segment, TextArea, Form, Button, TransitionablePortal } from "semantic-ui-react";

//REACT-REDUX 
import { connect } from "react-redux";

//NAVBAR
import Navbar from "./Navbar";

// CSS
import "../../css/master.css";

class FoodInfo extends React.Component {
  state = { animation: "zoom", duration: 500, open: false,loading:true,card:null}

  handleClose = () => this.setState({ open: false })
  handleOpen = () => this.setState({ open: true })

  componentDidMount() {
    Axios({
      url: "/api/foodinfo/",
      method: "GET",
    })
      .then((response) => {
        this.setState({card:response.data.cardData});
        this.setState({loading:false})
      })
      .catch((err) => {
        console.log("error occured while recieving from foodInfo", err);
      });
  }

  render = () => {
    const { open, animation, duration } = this.state
    if(this.state.loading===true){
      return(
        <div>
          <Loader active size="large"><strong>Loading</strong></Loader>
        </div>
      )
    }
    else{
      return (
      
        <Container className="foodinfo">
          <Navbar/>  
          <div>
            <Header icon textAlign="center">
              <Header.Content className="title">{(this.state.card.title).toUpperCase()}</Header.Content>
            </Header>
          </div>
          <Segment className="details">
            <Item.Group>
              <Item>
                <Item.Image size="medium" src={require(`../../images/cardimg/${this.state.card.image}`)} />
  
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
                      <strong>Others: </strong>
                      <em>{this.state.card.other}</em>
                    </p>
                    <h2 className="ui dividing header">Contact Details</h2>
                    <p>
                      <strong>Phone No: </strong> {this.state.card.phoneno} &nbsp; &nbsp;
                      <br/>
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
                        disabled
                        value={this.state.card.address}
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
                      <Header>Your Referal Code: <em>{(this.state.card.phoneno)%10000}</em> </Header>
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
    }
    
    
  };
}

//GETTING DATA FROM REACT
const mapStateToProp = (state) => {
  return {
    cardDetails: state.cardDetails,
  };
};

export default connect(mapStateToProp)(FoodInfo);

