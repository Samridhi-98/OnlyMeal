import React from 'react';
import { Link } from "react-router-dom";
// Images

import donut from '../../images/minion_donut.svg';
import logo from '../../images/logo.svg';

//CSS
import '../../css/master.css';
import { Header, Form, Image, Button, Icon } from 'semantic-ui-react';

const Main = () => {
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
                                <Form className="signupForm">
                                    <Header as='h2' icon textAlign='center'>
                                        <Image src={logo} />
                                        {/* <Header.Content>Severing Happiness</Header.Content> */}
                                        <p className="formTitle">Severing Happiness</p>
                                    </Header>
                                    <Form.Input required fluid label="First Name" placeholder="Ex. Vinod" />
                                    <Form.Input required fluid label="Last Name" placeholder="" />
                                    <Form.Group widths="equal">
                                        <Form.Input required fluid label="Email ID" type="email" placeholder="" />
                                        <Form.Input required fluid label="Password" type="password" placeholder="" />
                                    </Form.Group>
                                    <Form.Input required fluid label="Phone No." type="" placeholder="" />
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


export default Main;





