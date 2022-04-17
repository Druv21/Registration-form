import React from 'react';
import '../css/Form.css';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import blacklogo from '../assets/black.png';

function Form() {
 
   
    // const hi=()=>{
    //     window.location.reload(false);
       
    // }
       
    const [submit,setsubmit]=useState("");

  return(
      <>
         
       <div className="container">
         
        <div className="screen">
       
            <div className="screen__content">
            <div>
                <img src={blacklogo} alt="Image" height="100" width="120"/>
            </div>
            <h1 className="heading">
              Registration
              </h1>
                <form className="login">
                    <div className="login__field">
                       
                        <input type="email" className="login__input" placeholder="Enter Email" onChange={(event)=>{setsubmit(event.target.value)}}/>
                    </div>
                   
                    <Link to="/form1"><button className="login__submit button1">
                        Generate OTP
                       
                    </button>
                    </Link>
                </form>
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

export default Form;