import React from "react";
import "../css/reg_form.css";
import blacklogo from "../assets/black.png";
import axios from "axios";

const Form2 = () => {
  const email = localStorage.getItem("email");

  var obj = {
    email: email,
    teamleader: "",
    teamname: "",
    studentno: "",
    phone: "",
    member1: "",
    member1_studentno: "",
    member2: "",
    member2_studentno: "",
  };

  const senddata = async () => {
    axios
      .post("https://eventformconatus.herokuapp.com/users", obj)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function updateJSON() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      var q = inputs[i].name.split("%$#^");
      setValue(obj, q, inputs[i].value);
    }
    console.log(obj);
    senddata();
  }

  function setValue(obj, q, val) {
    var sel = q.shift();
    if (typeof obj[sel] === "object" && q.length > 0) {
      setValue(obj[sel], q, val);
    } else {
      obj[sel] = val;
    }
  }

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <div>
            <img src={blacklogo} alt="Logo" height="100" width="120" />
          </div>
          <form className="login form2">
            <div className="scroll">
              <div className="login__field">
                <input
                  type="email"
                  id="fields"
                  className="login__input"
                  name="email"
                  value={email}
                  placeholder="Enter Email"
                  readOnly
                  required
                />
              </div>
              <div className="login__field">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="teamleader"
                  placeholder="Enter Team Leader Name"
                  required
                />
              </div>
              <div className="login__field">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="teamname"
                  placeholder="Enter Team Name"
                  required
                />
              </div>
              <div className="login__field">
                <input
                  type="number"
                  id="fields"
                  className="login__input"
                  name="studentno"
                  placeholder="Enter Student Number"
                  required
                />
              </div>
              <div className="login__field">
                <input
                  type="number"
                  id="fields"
                  className="login__input"
                  name="phone"
                  placeholder="Enter Phone Number"
                  maxLength="10"
                  required
                />
              </div>
              <div className="login__field form3">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="member1"
                  placeholder="Enter Member 1 Name"
                  required
                />
              </div>
              <div className="login__field form3">
                <input
                  type="number"
                  id="fields"
                  className="login__input"
                  name="member1_studentno"
                  placeholder="Enter Student Number"
                  required
                />
              </div>
              <div className="login__field form3">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="member2"
                  placeholder="Enter Member 2 Name"
                  required
                />
              </div>
              <div className="login__field form3">
                <input
                  type="number"
                  id="fields"
                  className="login__input"
                  name="member2_studentno"
                  placeholder="Enter Student Number"
                  required
                />
              </div>
            </div>
            <button
              className="login__submit"
              type="button"
              onClick={updateJSON}
            >
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
  );
};

export default Form2;
