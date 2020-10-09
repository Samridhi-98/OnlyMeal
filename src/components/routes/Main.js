import React from 'react';
import { Link } from "react-router-dom";
// Images
import Giphy from '../../images/giphy.webp';
import PanCake from '../../images/pancake.gif';

//CSS
import '../../css/master.css';

const Main = () => {
    return (
        <div className=" main root ">
            <div className="ui grid container">
                <div className="row inner-root">
                    <div className="ten wide computer computer only column">
                        <div className="">
                            <h2>OnlyMeal</h2>
                            <img className="image" alt="test1" src={Giphy} />
                            <img className="image" alt="test2" src={PanCake} />
                        </div>
                    </div>
                    <div className="sixteen wide tablet six wide computer column">
                        <div className="ui segment">
                            <div>
                                <form className="ui form">
                                    <div className="required field">
                                        <label>Username</label>
                                        <input type="text" placeholder="Username" />
                                    </div>
                                    <div className="required field">
                                        <label>Email</label>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="required field">
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <div className="required field">
                                        <label>Confirm Password</label>
                                        <input type="password" placeholder="Confirm Password" />
                                    </div>
                                    <div className="required field">
                                        <div className="ui checkbox">
                                            <input type="checkbox" className="hidden" />
                                            <label>I agree to the Terms and Conditions</label>
                                        </div>
                                    </div>
                                    <Link className="ui inverted button green" to="/dashboard">Signin</Link>
                                    <button className="ui inverted button blue" >Signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Main;





