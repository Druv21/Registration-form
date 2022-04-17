import React from 'react'
// import { Link } from 'react-router-dom';
import '../css/Form.css';
import blacklogo from '../assets/black.png';

function Form3(){
    return(
        <div className="container">
         
    <div className="screen">
    <div className="screen__content">
    <div>
                <img src={blacklogo} alt="Image" height="100" width="120"/>
            </div>

        <form className="login form3">
       
                   
                    <div className="login__field form3">
                       
                        <input type="text" className="login__input" placeholder="Enter Member 1 Name"/>
                    </div>
                    <div className="login__field form3">
                       
                        <input type="text" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <div className="login__field form3">
                       
                        <input type="text" className="login__input" placeholder="Enter Member 2 Name"/>
                    </div>
                    <div className="login__field form3">
                       
                        <input type="text" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <div className="login__field form3">
                     
                        <input type="text" className="login__input" placeholder="Enter Member 3 Name"/>
                    </div>
                    <div className="login__field form3">
                       
                        <input type="text" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <button className="login__submit button4">
                        <span className="button__text">Submit</span>
                       
                    </button>
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
  )
}
export default Form3;