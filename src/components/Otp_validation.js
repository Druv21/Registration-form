import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/reg_form.css";
import { useState } from "react";
import blacklogo from "../assets/black.png";
import axios from "axios";
import validator from "validator";

function Form() {
  var otp = "";
  var nextfield = "";
  var count = 0;
  var store = "";

  const [url1, seturl] = useState("");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [email, setemail] = useState("");

  const postapi = async () => {
    if (validator.isEmail(email)) {
     
      axios
        .post("https://event0form.herokuapp.com/sendOTP", {
          email: email,
        })
        .then(function (response) {
          alert("OTP sent successfully");
          store = response.data.user._id;

          seturl("https://event0form.herokuapp.com/verifyOTP/" + store);
          setShow(true);
        })
        .catch(function (error) {
          if (error.response.data === "Email already registered") setShow(true);
          else alert("error");
        });
    } else {
      alert("Wrong email");
      window.location.reload(false);
    }
  };

  const showdiv = (e) => {
    e.preventDefault();
    postapi();
  };

  const getdata = (event) => {
    setemail(event.target.value);
  };

  const resendotp = async () => {
    axios
      .post("https://event0form.herokuapp.com/sendOTP", {
        email: email,
      })
      .then(function (response) {
        alert("OTP sent successfully");
      })
      .catch(function (error) {
        alert("OTP not sent")
      });
  };

  const store_otp = (event) => {
    otp = otp.concat(event.target.value);
    count = count + 1;
    if (count === 4) {
      count = 0;
      url();
    }
    const { maxLength, value, name } = event.target;
    const [fieldName, fieldIndex] = name.split("-");

    var fieldIntIndex = parseInt(fieldIndex, 10);
    if (value.length >= maxLength) {
      if (fieldIntIndex < 4) {
        nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );
      }
      if (nextfield !== null) {
        nextfield.focus();
      }
    }
  };
  const makeempty = () => {
    otp = "";
    var i = 0;
    while (i !== 4) {
      i += 1;
      var index = document.querySelector(`input[name=field-${i}]`);
      index.value = "";
    }
    var foc = document.querySelector(`input[name=field-${1}]`);
    foc.focus();
  };
  const url = () => {
    axios
      .post(url1, {
        otp: otp,
      })
      .then(function (response) {
        if (response.data === "Otp Verified") {
          history.push("/form2");
          history.go();
        } else {
          alert("Wrong OTP");
          makeempty();
        }
      })
      .catch(function (error) {
        alert("Wrong OTP");
        makeempty();
      });
  };
  useEffect(() => {}, [email]);
  localStorage.setItem("email", email);
  return (
    <>
      <div className="container">
        <div className="screen" style={{ display: show ? "none" : "block" }}>
          <div className="screen__content">
            <div>
              <img src={blacklogo} alt="Logo" height="100" width="120" />
            </div>
            <h1 className="heading">Registration</h1>
            <form className="login">
              <div className="login__field">
                <input
                  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  type="email"
                  className="login__input"
                  placeholder="Enter Email"
                  onChange={getdata}
                />
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
        <div className="screen" style={{ display: show ? "block" : "none" }}>
          <div className="screen__content">
            <div>
              <img src={blacklogo} alt="Logo" height="100" width="120" />
            </div>
            <h1 className="heading">Enter OTP</h1>
            <div className="otpbox">
              <input
                name="field-1"
                length="1"
                type="text"
                className="OTP"
                maxLength="1"
                required
                onChange={store_otp}
              />
              <input
                name="field-2"
                length="1"
                type="text"
                className="OTP"
                maxLength="1"
                required
                onChange={store_otp}
              />
              <input
                name="field-3"
                length="1"
                type="text"
                className="OTP"
                maxLength="1"
                required
                onChange={store_otp}
              />
              <input
                name="field-4"
                length="1"
                type="text"
                className="OTP"
                maxLength="1"
                required
                onChange={store_otp}
              />
            </div>

            <button
              className="login__submit button2 button4"
              onClick={resendotp}
            >
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
