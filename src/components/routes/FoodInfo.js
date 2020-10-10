import React from "react";
import { Container,Header, Item, Segment, Input,TextArea, Form } from "semantic-ui-react";

// Image
import minion_luv from "../../images/minion_luv.svg";
import minion_graph from "../../images/minion_graph.svg";
import sip from "../../images/sip.svg";

// CSS
import "../../css/master.css";

class FoodInfo extends React.Component {
  render = () => {
    return (
      <Container className="foodinfo">
        <div>
          <Header icon textAlign="center">
            {/* <Image className="headerImg" src={sip} /> */}
            <Header.Content className="title">Rajma Rice</Header.Content>
          </Header>
        </div>
        <Segment className="details">
          <Item.Group>
            <Item>
              <Item.Image size="medium" src={minion_luv} />

              <Item.Content>
                {/* <Item.Header className="header">Rajma Rice</Item.Header>
                <br/>
                <br/> */}
                <Item.Description className="description">
                  <h2 className="ui dividing header">Food Descriptions</h2>
                  
                  <p className="">
                    <strong>Type: </strong> Veg. &nbsp; &nbsp;
                    <strong>Category: </strong> Cooked &nbsp; &nbsp;
                    <strong>State: </strong> Wet &nbsp; &nbsp;
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
                    <strong>Phone No: </strong> 1234567890 &nbsp; &nbsp;
                    <br/>
                    <strong>Email: </strong> abcdef@gmail.com &nbsp; &nbsp;
                    <br/>
                    <strong>City: </strong> New Delhi  &nbsp; &nbsp;
                    <strong>PIN Code: </strong> 110031  &nbsp; &nbsp;
                    <br />
                    {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                      </p> */}
                  </p>
                </Item.Description>
                <Item.Extra>Additional Details</Item.Extra>
              </Item.Content>
            </Item>

            <Item>
              <Item.Content>
              
                <Item.Description>
                    <h2 className="ui dividing header">Address</h2>
                    {/* <Input 
                        fluid
                        
                        label={{ icon: 'home' }}
                        size="medium"
                        labelPosition='left corner'
                        placeholder='Search...'
                        value="542-1 Maekaizukachō
                        Funabashi, Chiba 273-0042 "
                    /> */}
                    <Form>
                        <TextArea
                            value="542-1 Maekaizukachō 
                            Funabashi, Chiba 273-0042 "
                        />
                    </Form>
                    
                </Item.Description>
                
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Container>
    );
  };
}
export default FoodInfo;
