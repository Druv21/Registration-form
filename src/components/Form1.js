import React from 'react';
import '../css/Form.css';
import { Link } from 'react-router-dom';
import logo from '../assets/black.png';

function Form1(){
 
return(
        <>
          <div className="container">
            <div className="screen">
              <div className="screen__content">
                <div>
                  <img src={logo} alt="Logo" height="100" width="120"/>
                </div>
                <h1 className="heading">
                  Enter OTP
                </h1>
                <div className="otpbox">
                  <input type="text" className="OTP" maxLength="1"/>
                  <input type="text" className="OTP" maxLength="1"/>
                  <input type="text" className="OTP" maxLength="1"/>
                  <input type="text" className="OTP" maxLength="1"/>
                </div>
                 <Link className="link" to="/form2">
                  <button className="login__submit button2">
                  <span className="button__text">Verify OTP</span>
                  </button>
                 </Link>
               </div>
               <div className="screen__background">
                 <span className="screen__background__shape screen__background__shape4"></span>
                 <span className="screen__background__shape screen__background__shape3"></span>
                 <span className="screen__background__shape screen__background__shape2"></span>
                 <span className="screen__background__shape screen__background__shape1"></span>
               </div>
            </div>
          </div>
        </>
      );
}

export default Form1;