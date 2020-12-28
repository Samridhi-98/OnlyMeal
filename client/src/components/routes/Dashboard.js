import React from "react";
// axios
import Axios from "axios";
//REACT-REDUX 
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

//CAROUSEL
import Carousel from "../../CarouselCard";

//SEMANTIC-UI-REACT
import { Item, Segment, Container, Grid, Rating, Label, Loader,Header} from "semantic-ui-react";

//NAVBAR
import Navbar from "./Navbar";

//CSS
import "../../css/master.css";

//ACTION-CREATOR
import { fillDashboard } from "../../actions/index";

class Dashboard extends React.Component {

  state= {
    expired:"",
    loading:true
  }
  //only run for the first time 
  componentDidMount(){
    Axios.get('/api')
        .then((response)=>{
          const data=response.data;
          this.props.fillDashboard(data);
          this.setState({loading:false})
          console.log("data has been delivered to client side");
        })
        .catch((error)=>{
          //not a good approach . did this just for fun
          console.log("bhag bdk",error);
        })
  }
  //! Adding data to recieved section of CURRENT USER 
  addDataToRecieved(cardData){
    
    console.log("availing data: ",cardData);
    Axios({
      url: "/api/recieve",
      method: "POST",
      //?  we can assign a key of object(key:val) to another object
      data:{
        cardData:cardData,
        recieverId:this.props.authDetails.user.id
      }
    })
    .then(()=>{
      console.log("recieved data sent to server!!");
      this.props.history.push("/foodInfo");
      console.log("foodInfo chala ya nhii!!");
    })
    .catch((err)=>{
      console.log("recieved data didnt send",err);
    })
  }
  checkFood=(foodDate,category)=>{
    const old= new Date(foodDate).getDate();
    const curr=new Date().getDate();
    let isFresh;
    if(category==="Cooked"){
      isFresh = (curr-old<=1) ? true : false;
    }
    else{
      isFresh = (curr-old<=7) ? true : false;
    }
    return isFresh;
  }

  render() {
    console.log("in dashboard",this.props.cardDetails);
    if(this.state.loading === true){
      return(
        <div>
          <Loader active size="large"><strong>Loading </strong></Loader>
        </div>
      )
      
    }
    else{
      const cardList = this.props.cardDetails.map((cardDetail) => {
        // const isFresh=(new Date().getDate()-new Date(cardDetail.date).getDate())>2 ? false : true;
        const isFresh=this.checkFood(cardDetail.date,cardDetail.category);
        console.log("difference of date: ",isFresh);
        return (
          <Grid.Column>
            <Segment  raised className="details">
              {/* <Label color={isFresh ? "olive" : "red"} attached='bottom'>{isFresh ? "Available" : "Expired" }</Label> */}
              <Item.Group divided>
                <Item >
                  <Item.Image 
                    size="small" 
                    src={require(`../../images/cardimg/${cardDetail.image}`)}
                  />
                  <Item.Content>
                    <Item.Header>{(cardDetail.title).toUpperCase()} 
                      <Label className="freshcheck" basic size="small" color={isFresh ? "green" : "red"}>{isFresh ? "Available" : "Expired" }</Label>
                      <Label color={(cardDetail.type === "Veg") ? "green" : "red"} attached="top right">{cardDetail.type}
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
                      <Header className="meta">
                      <em>{cardDetail.other}</em>
                      </Header>
                      
                      </p>
                    </Item.Description>
                    <Item.Extra>
                    
                      {/* <Label className={ isFresh ? "medium ui green label" : "medium ui red label" } >{isFresh ? 'Available' : 'Expired'}</Label> */}
                      <Link 
                        className="mini ui purple button"
                        onClick={()=>{this.addDataToRecieved(cardDetail)}}
                        
                        //? we cannt use {this.addDataToRecieved(cardDetaiils)} directly here.
                        //! LINK : https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
                        
                      >Claim</Link>
                      <Rating className="rating-star" size="large" icon='star' defaultRating={3} maxRating={5} />
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
          <div> <Navbar/> </div>
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
}
// Passing data to our state
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({fillDashboard},dispatch);
}
//GETTING DATA FROM REACT
const mapStateToProp = (state) => {
  return {
    cardDetails: state.cardDetails,
    authDetails:state.authDetails
    // carouselFact: state.carouselFact
  };
};

export default connect(mapStateToProp,mapDispatchToProps)(Dashboard);
