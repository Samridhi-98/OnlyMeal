import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { createUser } from "../../actions/index.js";

// Images
import donut from '../../images/minion_donut.svg';
import logo from '../../images/logo.svg';

//CSS
import '../../css/master.css';
import { Header, Form, Image, Button, Icon } from 'semantic-ui-react';

class Login extends React.Component {

    renderEmailFieild(field) {
        return (
            <div>
                <Form.Input fluid label="Email ID" type="email" placeholder="" {...field.input} error={field.meta.touched ? field.meta.error : null} />
            </div>

        )
    }
    renderPasswordField(field) {
        return (
            <Form.Input fluid label="Password" type="password" placeholder="" {...field.input} error={field.meta.touched ? field.meta.error : null} />
        )
    }

    onSubmit(values) {
        console.log("values are ", values);
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
                                <Image src={donut} size='large' />
                            </div>
                        </div>
                        <div className="sixteen wide tablet six wide computer column ">
                            <div className="ui segment">
                                <div>
                                    <Form className="signupForm" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                        <Header as='h2' icon textAlign='center'>
                                            <Image src={logo} />
                                            <p className="formTitle">Severing Happiness</p>
                                        </Header>
                                        {/* email */}
                                        <Field
                                            name="email"
                                            component={this.renderEmailFieild}
                                        />
                                        {/* password */}
                                        <Field
                                            name="password"
                                            component={this.renderPasswordField}
                                        />
                                        <Form.Group >
                                            <Form.Button className="submitButton" color="violet" type="submit">Login</Form.Button>
                                            <Button color='google plus'>
                                                <Icon name='google plus' /> Google
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
    const errors = {}
    if (!values.password || values.password.length < 8) {
        errors.password = "Please enter a password with 8 or more characters";
    }
    if (!values.email) {
        errors.email = "Please enter a valid email";
    }
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
    connect(null, { createUser })(Login)
);








