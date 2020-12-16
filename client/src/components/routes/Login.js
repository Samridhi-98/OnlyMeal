import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

//IMPORT ACTION-CREATOR
import { loginUser } from "../../actions/authAction";
//import { createUser } from "../../actions/index.js";

// Images
import donut from "../../images/minion_donut.svg";
import logo from "../../images/logo.svg";
//import PropTypes from "prop-types";
//CSS
import "../../css/master.css";
import { Header, Form, Image, Button, Icon, Message } from "semantic-ui-react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginErr: null,
    };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  renderEmailFieild(field) {
    return (
      <div>
        <Form.Input
          fluid
          label="Email ID"
          type="email"
          placeholder=""
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

  onSubmit(values, err) {
    // values.preventDefault();
    //console.log("login error: ",err);

    console.log("values are ", values);
    this.props.loginUser(values);
    //this.props.history.push("/dashboard");
    console.log("AUTH: ", this.props.auth);
    // if (!this.props.auth.isAuthenticated) {
    //   console.log("INVALID USER");
    //   // err = "Invalid credentials,Please try again";
    //   this.setState({ loginErr: "Invalid credentials,Please try again" });
    //   console.log("inside: ", this.state.loginErr);
    // }
  }

  render() {
    // handlSubmit is provided by redux form to us
    const { handleSubmit } = this.props;
    return (
      <div className=" main root ">
        <div className="ui grid container">
          <div className="row stackable doubling inner-root">
            <div className="ten wide computer only column">
              <div className="sideImg">
                <Image src={donut} size="large" />
              </div>
            </div>
            <div className="sixteen wide tablet six wide computer column ">
              {console.log("login error",this.props.errorDetails)}
              
              {this.props.errorDetails.emailnotfound ? (
                <Message negative>
                  <Message.Header>{this.props.errorDetails.emailnotfound}</Message.Header>
                </Message>
              ) : (
                ""
              )}

              {this.props.errorDetails.passwordincorrect ? (
                <Message negative>
                  <Message.Header>{this.props.errorDetails.passwordincorrect}</Message.Header>
                </Message>
                ) : (
                ""
              )}
              <div className="ui segment">
                <div>
                  <Form
                    className="signupForm"
                    onSubmit={handleSubmit(this.onSubmit.bind(this))}
                  >
                    <Header as="h2" icon textAlign="center">
                      <Image src={logo} />
                      <p className="formTitle">Severing Happiness</p>
                    </Header>
                    {/* email */}
                    <Field name="email" component={this.renderEmailFieild} />
                    {/* password */}
                    <Field
                      name="password"
                      component={this.renderPasswordField}
                    />
                    <Form.Group>
                      <Form.Button
                        className="submitButton"
                        color="violet"
                        type="submit"
                      >
                        Login
                      </Form.Button>
                      <Button color="google plus">
                        <Icon name="google plus" /> Google
                      </Button>
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
  const errors = {};
  if (!values.password || values.password.length < 8) {
    errors.password = "Please enter a password with 8 or more characters";
  }
  if (!values.email) {
    errors.email = "Please enter a valid email";
  }
  return errors;
}
const mapStateToProps = (state) => ({
  auth: state.authDetails,
  errorDetails:state.errorDetails
});
export default reduxForm({
  validate: validate,
  form: "PostsNewForm",
})(connect(mapStateToProps, { loginUser })(Login));
