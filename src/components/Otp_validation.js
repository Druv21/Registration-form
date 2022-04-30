import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/reg_form.css';
import {useState} from 'react';
import blacklogo from '../assets/black.png';
import axios from 'axios';


function Form() {

    var otp="";
    var nextfield="";
    var count=0;

       const history=useHistory();
       const [show, setShow] = useState(false);
       const [email,setemail]=useState("");

       const postapi=async()=>{
        axios.post("https://event0form.herokuapp.com/sendOTP",JSON.stringify(email))
        .then(function (response) {
          console.log(response);
          setShow(true);
        })
        .catch(function (error) {
          console.log(error);
        });
        //const resdata=await fetchApi();
        //console.log(resdata);
      }

       const showdiv = (e)=>{
            e.preventDefault();
            postapi();
            //setShow(true);
       };

       const getdata=(event)=>{
           setemail(event.target.value);
       }

       const url=()=>{
        axios.post("https://event0form.herokuapp.com/verifyOTP/:id/",otp)
        .then(function (response) {
          console.log(response);
          history.push("/form2");
           history.go();
        })
        .catch(function (error) {
          console.log(error);
        });
       }

       const store_otp=(event)=>{
           otp=otp.concat(event.target.value);
           count=count+1;
           if(count===4){
               url();
           }
           const {maxLength, value, name}=event.target;
           const [fieldName,fieldIndex]=name.split("-");

           let fieldIntIndex=parseInt(fieldIndex,10);
           if(value.length>=maxLength){
             if(fieldIntIndex<4){
               nextfield=document.querySelector(`input[name=field-${fieldIntIndex+1}]`);
             }
             if(nextfield!==null){
               nextfield.focus();
             }
           }
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
                        <input pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" type="text" className="login__input" placeholder="Enter Email" onChange={getdata}/>
                    </div>
                    <button className="login__submit button1" type="button" onClick={showdiv}>
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
                  <input name="field-1" length="1" type="text" className="OTP" maxLength="1" required onChange={store_otp}/>
                  <input name="field-2" length="1" type="text" className="OTP" maxLength="1" required onChange={store_otp}/>
                  <input name="field-3" length="1" type="text" className="OTP" maxLength="1" required onChange={store_otp}/>
                  <input name="field-4" length="1" type="text" className="OTP" maxLength="1" required onChange={store_otp}/>
                </div>
                  {/* <button className="login__submit button2" onClick={url}>
                    <span className="button__text">Verify OTP</span>
                  </button> */}
                 <button className="login__submit button2 button4" type=''>
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