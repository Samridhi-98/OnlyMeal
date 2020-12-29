import React from "react";

//IMPORT REACT-REDUX AND REDUX-FORM
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";

//IMPORT ACTION-CREATOR
import { registerUser } from "../../actions/authAction";

// IMAGES
//import registerImg from "../../images/authImages/minion_donut.svg";
import logo from "../../images/logo.svg";

//CSS
import "../../css/master.css";
import { Header, Form, Image,Message } from "semantic-ui-react";

class Register extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  renderNameField(field) {
    console.log("name chal paya");
    return (
      <div>
        <Form.Input
          fluid
          placeholder="Ex. Vinod"
          label="Username"
          {...field.input}
          error={field.meta.touched ? field.meta.error : null}
        />
      </div>
    );
  }
  renderEmailFieild(field) {
    return (
      <div>
        <Form.Input
          fluid
          label="Email ID"
          type="email"
          placeholder="something@.com"
          {...field.input}
          error={field.meta.touched ? field.meta.error : null}
        />
      </div>
    );
  }
  renderPasswordField(field) {
    return (
      <Form.Input
        fluid
        label="Password"
        type="password"
        placeholder=""
        {...field.input}
        error={field.meta.touched ? field.meta.error : null}
      />
    );
  }
  renderConfirmPasswordField(field) {
    return (
      <Form.Input
        fluid
        label="Confirm Password"
        type="password"
        placeholder=""
        {...field.input}
        error={field.meta.touched ? field.meta.error : null}
      />
    );
  }
  onSubmit(values) {
    //this===component
    console.log("values are ", values);
    this.props.registerUser(values, this.props.history);
  }
  render() {
    // handlSubmit is provided by redux form to us
    const { handleSubmit } = this.props;
    return (
      <div className=" main">
        <div className="ui grid container">
          <div className="row stackable doubling inner-root">
            <div className="five wide computer only column">
              {/* <div className="sideImg">
                <Image src={registerImg} size="large" />
              </div> */}
            </div>
            <div className="sixteen wide tablet six wide computer column ">
              {/* Error message */}
              {console.log("registeration error: ",this.props.errorDetails)}
              {this.props.errorDetails.email ? (
                <Message negative>
                  <Message.Header>{this.props.errorDetails.email}</Message.Header>
                  {this.props.errorDetails.email=""}
                </Message>
              ) : (
                ""
              )}
              <div className="ui raised segment">
                <div>
                  {/* here when we click the submit button the handleSumbit will run and perform redux side of things
                                        and then calls out onSubmit() function that we have bind to it */}
                  <Form
                    className="signupForm"
                    onSubmit={handleSubmit(this.onSubmit.bind(this))}
                  >
                    <Header as="h2" icon textAlign="center">
                      <Image src={logo} />
                      {/* <Header.Content>Severing Happiness</Header.Content> */}
                      <p className="formTitle">Serving Happiness</p>
                    </Header>
                    {/* User Name */}
                    <Field name="username" component={this.renderNameField} />
                    {/* <Form.Group widths="equal"> */}
                    {/* email */}
                    <Field name="email" component={this.renderEmailFieild} />
                    {/* password */}
                    <Field
                      name="password"
                      component={this.renderPasswordField}
                    />
                    {/* </Form.Group> */}

                    {/* PhoneNo */}
                    <Field
                      name="confirmpassword"
                      component={this.renderConfirmPasswordField}
                    />

                    <Form.Group className="formButton">
                      <Form.Button
                        className="submitButton"
                        color="violet"
                        type="submit"
                      >
                        SignUp
                      </Form.Button>
                      {/* <Form.Button className="submitButton" color="violet" type="submit">SignIn</Form.Button> */}
                      {/* <Button color='google plus'>
                                                <Icon name='google plus' /> Google
                                            </Button> */}
                      {/* <Button className="submitButton" color="violet" >Google</Button>  */}
                      <Link className="signin ui violet button" to="/">
                        SignIn
                      </Link>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  //values refer to the values user have enteredin the form
  const errors = {}; 
  //console.log("values", values);
  if (!values.username || values.username.length < 3) {
    errors.username = "Name must be atleast 3 characters long";
  }
  if (!values.email || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) ) {
    errors.email = "Please enter a valid email";
  }
  if (!values.password || values.password.length < 8) {
    errors.password = "Please enter a password with 8 or more characters";
  }
  if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "Password did not match";
  }

  //if errors is empty form is fine and is ready to submit
  // if errors has any property redux form assumes form is invalid
  return errors;
}

//PASSING DATA TO REDUCER THROUGH ACTION-CREATOR-BIND
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ registerUser }, dispatch);
};
//getting data from react
const mapStateProps=(state)=>{
  return {
    errorDetails: state.errorDetails
  }
  
}
export default reduxForm({
  validate: validate, //if key and value name are same just pass the name itself no need for  key:value
  form: "PostsNewForm",
})(connect(mapStateProps, { registerUser, mapDispatchToProps })(Register));
