import React, { Component } from 'react';
// import axios from "axios";
//SEMANTIC-UI-REACT
import { Form, Message, Image, Header } from 'semantic-ui-react';

//REACT-REDUX AND REDUX-FORM
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import moment from "moment";

//ACTION-CREATOR
import { createCard } from "../../actions/index";

// IMAGE
import minion_card from "../../images/minion_card.svg";

// CSS
import "../../css/master.css";

//NAVBAR
import Navbar from "./Navbar";

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
        <option key="Veg" value="Veg">Veg.</option>
        <option key="NonVeg" value="NonVeg">Non Veg.</option>
      </select>
      // <Form.Select fluid label='Type' options={type} placeholder='' {...field.select} error={field.meta.touched ? field.meta.error : null}/>
    );
  }
  renderCategoryField(field) {
    return (
      <select className="ui fluid dropdown"  {...field.input} error={field.meta.touched ? field.meta.error : null}>
        <option key="" value=""></option>
        <option key="Raw" value="Raw">Raw</option>
        <option key="Cooked" value="Cooked">Cooked</option>
      </select>
    );
  }
  renderStateField(field) {
    return (
      <select className="ui fluid dropdown" {...field.input} error={field.meta.touched ? field.meta.error : null}>
        <option key="" value=""></option>
        <option key="Dry" value="Dry">Dry</option>
        <option key="Wet" value="Wet">Wet</option>
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
  findImageSrc(values){
    
    if(values.state==="Dry"){
      if(values.category==="Cooked"){
        return "one.svg";
      }
      else{
        return "two.svg";
      }
    }else{
      if(values.category==="Cooked"){
        return "three.svg";
      }
      else{
        return "four.svg";
      }
    }
  }
  onSubmit(values) {
    // console.log("called submit with values: ",values);
    console.log("onsubmit", values);
    console.log("id => ",this.props.authDetails.user)
    const foodInfo={
      userid:this.props.authDetails.user.id,
      title:values.title,
      image:this.findImageSrc(values),
      address:values.address,
      type:values.type,
      category:values.category,
      state:values.state,
      date:values.date,
      other:values.other,
      quantity:values.quantity,
      phoneno:values.phoneno,
      email:this.props.authDetails.user.email,
      city:values.city,
      pincode:values.pincode,

    }
    console.log("foodInfo ",foodInfo);
    this.props.createCard(foodInfo);
    this.props.history.push("/dashboard");
  }
  render() {
    // const { value } = this.state
    const { handleSubmit } = this.props;
    return (
      <div className="createAvail">
      <div> <Navbar/> </div>
        <div className="heading">
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
 
  const curDate = new Date(Date.now());
  const userDate = new Date(values.date);
  const checkDate=(curDate.getDate()>userDate.getDate()) ? (curDate.getDate()-userDate.getDate()):(userDate.getDate()-curDate.getDate());
  console.log("curDate", checkDate);
  console.log("previous:",moment().subtract(1, 'days').calendar()); //?YESTERDAY
  console.log("future:",moment().add(1, 'days').calendar());  //?TOMORROW

  if (!values.title) {
    error.title = "Please enter a title";
  }
  if (!values.date||curDate.getMonth()!==userDate.getMonth()||curDate.getFullYear()!==userDate.getFullYear()){
    error.date = "Please enter valid date";
  }
  if(checkDate>2){
    error.date = "Invalid request expired item"
  }
  if (!values.quantity || (values.quantity.length>10 && values.quantity.length<0)) {
    error.quantity = "Please enter quantity in range 0-10 Kg";
  }
  if (!values.other || values.other.length > 80) {
    error.other = "Please enter food details under 80 words";
  }
  if (!values.phoneno || values.phoneno.length !== 10) {
    error.phoneno = "Please enter a valid number";
  }
  if (!values.email || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
    error.email = "Please enter a valid email";
  }
  if (!values.city) {
    error.city = "Please enter a valid city";
  }
  if (!values.pincode || values.pincode.length !== 6) {
    error.pincode = "Please enter a valid pincode";
  }
  if (!values.address) {
    error.address = "Please enter valid address";
  }
  
  return error;
}

//PASSING DATA TO REDUCER THROUGH ACTION-CREATOR-BINDER
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createCard }, dispatch);
}
const mapStateToProps = (state) =>{
  return {
    authDetails:state.authDetails
  }
}
export default reduxForm({
  validate: validate,
  form: "CreateCards"
})(
  connect(mapStateToProps, mapDispatchToProps)(CreateAvail)
);