import React from "react";
// semantic ui
import {
  Container,
  Segment,
  Image,
  Header,
  Label,
  Icon,
  Menu,
  ImageGroup,
  Item,
  Rating,
  Grid,
} from "semantic-ui-react";
// images
import snow_cat from "../../images/profile/displaypic/cup.svg";

import donate from "../../images/profile/tags/donate.svg";
import banned from "../../images/profile/tags/banned.svg";
import consume from "../../images/profile/tags/consume.svg";
import cardImg from "../../images/minion_card.svg";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Container>
          <Segment className="profile-top">
            <Header as="h1" icon textAlign="center">
              <Image className="" src={snow_cat} />
              <Header.Content className="header-content">
                Alex ki Alexa
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
                <Label className="mid-titile" as="a" color="green" ribbon size="big">
                Donated
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
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
                        
                        <Grid.Column>
                            <Segment>
                                <Item.Group divided>
                                    <Item>
                                        <Item.Image size="small" src={cardImg} />
                                        <Item.Content>
                                        <Item.Header>Rajma Rice</Item.Header>
                                        <Item.Meta>10kg</Item.Meta>
                                        <Item.Description>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
export default Profile;
