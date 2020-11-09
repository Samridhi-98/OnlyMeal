import React, { Component } from 'react';

//SEMANTIC-UI-REACT
import { Form, Message, Image, Header } from 'semantic-ui-react';

//REACT-REDUX AND REDUX-FORM
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

//ACTION-CREATOR
import { createCard } from "../../actions/index";

// IMAGE
import minion_card from "../../images/minion_card.svg";

// CSS
import "../../css/master.css";

// const type = [
//   { key: 'v', text: 'Veg', value: 'veg' },
//   { key: 'nv', text: 'Non Veg', value: 'nonveg' }
// ]
const category = [
  { key: 'rw', text: 'Raw', value: 'raw' },
  { key: 'ck', text: 'Cooked', value: 'cooked' }
]
// const state = [
//   { key: 'dy', text: 'Dry', value: 'dry' },
//   { key: 'wt', text: 'Wet', value: 'wet' }
// ]



class CreateAvail extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  renderTitleField(field) {
    // console.log("title's input: ",field.input);
    return (

      <Form.Input fluid label='Title' placeholder='Ex.Rajma Rice' {...field.input} error={field.meta.touched ? field.meta.error : null} />
    );
  }
  renderTypeField(field) {
    // console.log("type's input: ",field.select);
    return (
      <select className="ui fluid dropdown" {...field.input} error={field.meta.touched ? field.meta.error : null}>
        <option key="" value=""></option>
        <option key="veg" value="veg">Veg.</option>
        <option key="nonveg" value="nonveg">Non Veg.</option>
      </select>
      // <Form.Select fluid label='Type' options={type} placeholder='' {...field.select} error={field.meta.touched ? field.meta.error : null}/>
    );
  }
  renderCategoryField(field) {
    console.log("category's input: ", category);
    return (
      <select className="ui fluid dropdown"  {...field.input} error={field.meta.touched ? field.meta.error : null}>
        <option key="" value=""></option>
        <option key="raw" value="raw">Raw</option>
        <option key="cooked" value="cooked">Cooked</option>
      </select>
      // <Form.Field 
      //   control={Select} 
      //   fluid 
      //   label='Category' 
      //   options={category} 
      //   search 
      //   {...field.searchInput} 
      //   error={field.meta.touched ? field.meta.error : null}
      // />
    );
  }
  renderStateField(field) {
    return (
      <select className="ui fluid dropdown" {...field.input} error={field.meta.touched ? field.meta.error : null}>
        <option key="" value=""></option>
        <option key="dry" value="dry">Dry</option>
        <option key="wet" value="wet">Wet</option>
      </select>
      // <Form.Select fluid label='State' options={state} placeholder='' {...field.input} error={field.meta.touched ? field.meta.error : null}/>
    );
  }
  renderDateField(field) {
    return (
      <Form.Input fluid label='Date' type="date" {...field.input} error={field.meta.touched ? field.meta.error : null} />
    );
  }
  renderQuantityField(field) {
    return (
      <Form.Input fluid label='Quantity' type='number' placeholder='in KG' {...field.input} error={field.meta.touched ? field.meta.error : null} />
    );
  }
  renderOtherField(field) {
    return (
      <Form.Input fluid label='Other' type='text' placeholder='other details' {...field.input} error={field.meta.touched ? field.meta.error : null} />
    );
  }
  renderPhonenoField(field) {
    return (
      <Form.Input fluid label='Phone No.' type="text" {...field.input} error={field.meta.touched ? field.meta.error : null} />
    );
  }
  renderEmailField(field) {
    return (
      <Form.Input fluid label='Email' type='email' placeholder='something with @' {...field.input} error={field.meta.touched ? field.meta.error : null} />
    );
  }
  renderCityField(field) {
    return (
      <Form.Input fluid label='City' type="text" placeholder="Ex.Delhi" {...field.input} error={field.meta.touched ? field.meta.error : null} />
    )
  }
  renderPinCodeField(field) {
    return (
      <Form.Input fluid label='PIN Code' type='text' placeholder='Ex.110031' {...field.input} error={field.meta.touched ? field.meta.error : null} />
    )
  }
  renderAddressField(field) {
    return (
      <Form.TextArea label='Address' placeholder='Enter full address' {...field.input} error={field.meta.touched ? field.meta.error : null} />
    );
  }

  onSubmit(values) {
    // console.log("called submit with values: ",values);
    this.props.history.push("/dashboard");
    console.log("onsubmit", values);
    this.props.createCard(values);
  }
  render() {
    // const { value } = this.state
    const { handleSubmit } = this.props;
    return (
      <div className="createAvail">
        <div>
          <Header as='h2' icon textAlign='center'>
            <Image className="headerImg" src={minion_card} />
            <Header.Content>Food Details</Header.Content>
          </Header>
        </div>

        <div className="ui segment container ">

          <Message
            warning
            header='Please fill all the details carefully'
          />
          <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="title"
              component={this.renderTitleField}
            />

            {/* -------------------------------- FOOD DESCRIPTION ---------------------------- */}
            <h4 className="ui dividing header">Food Description</h4>
            <Form.Group widths='equal'>

              <Field name="type" component={this.renderTypeField} />

              <Field name="category" component={this.renderCategoryField} />
              <Field name="state" component={this.renderStateField} />
            </Form.Group>

            {/* ---- */}
            <Form.Group widths='equal'>
              <Field name="date" component={this.renderDateField} />
              <Field name="quantity" component={this.renderQuantityField} />
              <Field name="other" component={this.renderOtherField} />
            </Form.Group>

            <h4 className="ui dividing header">Contact Details</h4>
            <Form.Group widths='equal'>
              <Field name="phoneno" component={this.renderPhonenoField} />
              <Field name="email" component={this.renderEmailField} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Field name="city" component={this.renderCityField} />
              <Field name="pincode" component={this.renderPinCodeField} />
            </Form.Group>
            <Field name="address" component={this.renderAddressField} />

            <Form.Checkbox required label='I agree to the Terms and Conditions' />
            <Form.Button color="violet">Submit</Form.Button>
          </Form>
        </div>
      </div>
    )
  }
}
function validate(values) {
  const error = {}
  // console.log("values are : ",values);
  if (!values.title) {
    error.title = "Please enter a title";
  }
  if (!values.date) {
    error.date = "Please enter a date";
  }
  if (!values.quantity) {
    error.quantity = "Please enter quantity";
  }
  if (!values.other || values.other.length > 30) {
    error.other = "Please enter food details under 30 words";
  }
  if (!values.phoneno || values.phoneno.length !== 10) {
    error.phoneno = "Please enter a valid number";
  }
  if (!values.email) {
    error.email = "Please enter a valid email";
  }
  if (!values.city) {
    error.city = "Please enter a valid city";
  }
  if (!values.pincode || values.pincode.length !== 6) {
    error.pincode = "Please enter a valid pincode";
  }
  if (!values.address) {
    error.address = "Please enter the address";
  }
  // if(!values.type.options){
  //   console.log(values.type);
  //   error.type="Please select a valid food type";
  // }
  // if(!values.category.options){
  //   error.category="Please select a valid food category";
  // }
  // if(!values.state.options){
  //   error.state="Please enter a valid food state";
  // }
  return error;
}

//PASSING DATA TO REDUCER THROUGH ACTION-CREATOR-BINDER
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createCard }, dispatch);
}
export default reduxForm({
  validate: validate,
  form: "CreateCards"
})(
  connect(null, mapDispatchToProps)(CreateAvail)
);