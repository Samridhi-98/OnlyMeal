import React from 'react';
import {connect} from "react-redux";
import {Field ,reduxForm} from "redux-form";

import {createUser} from "../../actions/index.js";

// Images
import donut from '../../images/minion_donut.svg';
import logo from '../../images/logo.svg';

//CSS
import '../../css/master.css';
import { Header, Form, Image, Button, Icon } from 'semantic-ui-react';

class Main extends React.Component {
    renderNameField(field){
        console.log("name chal paya");
        return(
            <div>
                <Form.Input fluid  placeholder="Ex. Vinod" label="First Name" {...field.input}/>
                {field.meta.touched ? field.meta.error : ""}
            </div>
        );
    }
    renderEmailFieild(field){
        return(
            <div>
                {field.meta.touched ? field.meta.error : ""}
                <Form.Input fluid label="Email ID" type="email" placeholder="" {...field.input}/>
            </div>
            
        )
    }
    renderPasswordField(field){
        return(    
            <Form.Input fluid label="Password" type="password" placeholder="" {...field.input} error={field.meta.touched ? field.meta.error : null}/>
        )
    }
    renderPhonenoField(field){
        return(
            <div>
                <h4>{field.meta.touched ? field.meta.error : ""}</h4>
                <Form.Input fluid label="Phone No." type="" placeholder="" {...field.input}/>
            </div>
        )
    }
    onSubmit(values){
        //this===component
        console.log("values are ",values);
        //this.props.createUser(values);
        
    }
    render(){
        // handlSubmit is provided by redux form to us
        const {handleSubmit}=this.props;
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
                                    {/* here when we click the submit button the handleSumbit will run and perform redux side of things
                                        and then calls out onSubmit() function that we have bind to it */}
                                    <Form className="signupForm" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                        <Header as='h2' icon textAlign='center'>
                                            <Image src={logo} />
                                            {/* <Header.Content>Severing Happiness</Header.Content> */}
                                            <p className="formTitle">Severing Happiness</p>
                                        </Header>
                                        {/* First Name */}
                                        <Field
                                            name="firstname"
                                            component={this.renderNameField}
                                        />
                                        {/* Last Name */}
                                       
                                        
                                        {/* <Form.Group widths="equal"> */}
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
                                        {/* </Form.Group> */}

                                        {/* PhoneNo */}
                                        <Field
                                            name="phoneno"
                                            component={this.renderPhonenoField}
                                        />

                                        <Form.Group >
                                            <Form.Button className="submitButton" color="violet" type="submit">SignUp</Form.Button>
                                            <Button color='google plus'>
                                                <Icon name='google plus' /> Google
                                            </Button>
                                            {/* <Button className="submitButton" color="violet" >Google</Button>  */}
                                            {/* <Link className="signin ui button"><Icon name='google plus' /> Google Plus</Link> */}
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

function validate(values){ //values refer to the values user have enteredin the form
    const errors={}
    //console.log("values", values);
    if(!values.firstname || values.firstname.length<3){
        errors.firstname="Name must be atleast 3 characters long";
    }
    if(!values.password || values.password.length<8){
        errors.password="Please enter a password with 8 or more characters";
    }
    if(!values.email){
        errors.email="Please enter a valid email";
    }
    if(!values.phoneno || values.phoneno.length!==10){
        errors.phoneno="Please enter a 10 digit valid phone number"
    }
    //if errors is empty form is fine and is ready to submit
    // if errors has any property redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate:validate, //if key and value name are same just pass the name itself no need for  key:value
    form:'PostsNewForm'
})(
    connect(null,{createUser})(Main)
);








