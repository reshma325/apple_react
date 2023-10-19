import React from 'react'
import './SignIn.css'

import rightarrow from '../Images/up-arrow-svgrepo-com.png';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const router = useNavigate();
    return (
        <div id='signin_screen'>
            <div id='signin_main'>
                <h1 id='signIn_heading'>
                    Sign in for faster checkout.

                </h1>
                <div id='signin_content'>
                    <div id='signin_content_main'>
                        <div id='signin_inner'>
                            <p>
                                Sign in to Apple Store
                            </p>
                            <div id='signin_input'>
                                <div id='sign_input-inner'>
                                    <div id='signin_input_card'>
                                    <input  placeholder='Email or Phone Number'></input>
                                <i class="fa-regular fa-circle-right fa-2xl" style={{ color: "#8c8c8c", marginTop: "25px", marginLeft: "100px", cursor: "pointer" }}></i>
                                    </div>
 
                                </div>
                              
                               
                              
                            </div>

                            <div id='signin_check'>
                            <input type="checkbox" style={{ marginTop: "100px", marginRight: "10px" }} />
                                 <label htmlFor="Remember me">Remember me</label>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SignIn



  {/* <p style={{ marginTop: "30px", color: "rgb(83,120,203)" }}>Forgotten your password? <img style={{ fontSize: "12px" }} src={rightarrow} /> </p>
                                <p style={{ marginTop: "10px", marginBottom: "150px" }}>Do not have an Apple ID? <span style={{ color: "rgb(83,120,203)" }} onClick={() => (router("/store"))}>Create yours now.<img style={{ fontSize: "12px" }} src={rightarrow} /></span></p> */}