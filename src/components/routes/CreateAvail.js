import React, { Component } from 'react';
import { Form,Message,Image,Header } from 'semantic-ui-react';
// Image
import cat from "../../images/cat-sip.png";

import "../../css/master.css";

const type = [
  { key: 'v', text: 'Veg', value: 'veg' },
  { key: 'nv', text: 'Non Veg', value: 'nonveg' }
]
const category = [
  { key: 'rw', text: 'Raw', value: 'raw' },
  { key: 'ck', text: 'Cooked', value: 'cooked' }
]
const state = [
  { key: 'dy', text: 'Dry', value: 'dry' },
  { key: 'wt', text: 'Wet', value: 'wet' }
]



class CreateAvail extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div className="createAvail">
        <div>
          <Header as='h2' icon textAlign='center'>
            <Image circular src={cat} />
            <Header.Content>Food Info.</Header.Content>
          </Header>
        </div>
      
        <div className="ui segment container ">
          
          <Message
            warning
            header='Please fill all the details carefully'
          />
          <Form>
            <Form.Input required fluid label='Title' placeholder='Ex.Rajma Rice'/>
            <h4 class="ui dividing header">Food Description</h4>

            {/* -------------------------------- FOOD DESCRIPTION ---------------------------- */}
            <Form.Group widths='equal'>
              <Form.Select required fluid label='Type' options={type} placeholder='' />
              <Form.Select required fluid label='Category'options={category} placeholder='' />
              <Form.Select required fluid label='State' options={state} placeholder=''/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input required fluid label='Date' type="date"  />
              <Form.Input required fluid label='Quantity' type='number' placeholder='in KG'/>
              <Form.Input required fluid label='Other' type='text' placeholder='other details'/>
            </Form.Group>
            <Form.Input label='Image' type='file' placeholder='other details'/>
            
            <h4 class="ui dividing header">Contact Details</h4>
            <Form.Group widths='equal'>
              <Form.Input required fluid label='Phone No.' type="text"  />
              <Form.Input required fluid label='Email' type='email' placeholder='something with @'/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input required fluid label='City' type="text" placeholder="Ex.Delhi" />
              <Form.Input required fluid label='PIN Code' type='text' placeholder='Ex.110031'/>
            </Form.Group>
            <Form.TextArea required label='Address' placeholder='Enter full address' value="" />
            <Form.Checkbox required label='I agree to the Terms and Conditions' />
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default CreateAvail;