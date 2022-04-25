import React from 'react';
import '../css/Form.css';
import blacklogo from '../assets/black.png';

const Form2 = () => {

  return (
    <div className="container">     
      <div className="screen">
        <div className="screen__content">
          <div>
            <img src={blacklogo} alt="Logo" height="100" width="120"/>
          </div>
          <form className="login form2">
            <div className="scroll">
             <div className="login__field">          
                <input type="text" className="login__input" placeholder="Enter Team Leader Name" required/>
             </div>
             <div className="login__field">
                <input type="email" className="login__input" placeholder="Enter Email" required/>
             </div>
             <div className="login__field">      
                <input type="text" className="login__input" placeholder="Enter Student Number" maxLength="7" required/>
             </div>
             <div className="login__field">          
                <input type="text" className="login__input" placeholder="Enter Mobile Number" maxLength="10" required/>
             </div>
             <div className="login__field">
                <input type="text" className="login__input" placeholder="Enter Section" required/>
             </div>
             <div className="login__field form3">
                <input type="text" className="login__input" placeholder="Enter Member 1 Name" required/>
             </div>
             <div className="login__field form3">
                <input type="text" className="login__input" placeholder="Enter Student Number" maxLength="7" required/>
             </div>
             <div className="login__field form3">
                <input type="text" className="login__input" placeholder="Enter Member 2 Name" required/>
             </div>
             <div className="login__field form3">
                <input type="text" className="login__input" placeholder="Enter Student Number" maxLength="7" required/>
             </div>
             <div className="login__field form3">
                <input type="text" className="login__input" placeholder="Enter Member 3 Name" required/>
             </div>
             <div className="login__field form3">
                <input type="text" className="login__input" placeholder="Enter Student Number" maxLength="7" required/>
             </div>
            </div>
            <button className="login__submit">
                <span className="button__text button3">Submit</span>       
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

export default Form2;
