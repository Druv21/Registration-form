import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Form.css';
import {useState} from 'react';
import blacklogo from '../assets/black.png';

function Form() {

       const history=useHistory();
       const [show, setShow] = useState(false);
       const [email,setemail]=useState("");
       const showdiv = (e)=>{
            e.preventDefault();
            setShow(true);
       };

       const getdata=(event)=>{
           setemail(event.target.value);
       }

       const url=()=>{
           history.push("/form2");
           history.go();
       }

       useEffect(()=>{
           console.log(email);
       },[email]);

  return(
      <>
       <div className="container">
        <div className="screen" style={{display:show?"none":"block"}}>
            <div className="screen__content">
            <div>
                <img src={blacklogo} alt="Logo" height="100" width="120"/>
            </div>
            <h1 className="heading">
              Registration
            </h1>
                <form className="login">
                    <div className="login__field">
                        <input type="email" className="login__input" placeholder="Enter Email" onChange={getdata}/>
                    </div>
                    <button className="login__submit button1" onClick={showdiv}>
                         Generate OTP
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

         <div className="screen" style={{display:show?"block":"none"}}>
              <div className="screen__content">
                <div>
                  <img src={blacklogo} alt="Logo" height="100" width="120"/>
                </div>
                <h1 className="heading">
                  Enter OTP
                </h1>
                <div className="otpbox">
                  <input type="text" className="OTP" maxLength="1" required/>
                  <input type="text" className="OTP" maxLength="1" required/>
                  <input type="text" className="OTP" maxLength="1" required/>
                  <input type="text" className="OTP" maxLength="1" required/>
                </div>
                  <button className="login__submit button2" onClick={url}>
                    <span className="button__text">Verify OTP</span>
                  </button>
                 <button className="login__submit button2 button4">
                    <span className="button__text">Resend OTP</span>
                 </button>
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