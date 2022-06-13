import React from "react";
import "../css/reg_form.css";
import blacklogo from "../assets/black.png";
import axios from "axios";

const Form2 = () => {
  const email = localStorage.getItem("email");

  const obj = {
    name: "",
    email: email,
    studentno: "",
    phone: "",
    branch: "",
    section: "",
    residence: ""
  };

  const json= JSON.stringify({obj});

  const senddata = async () => {
   // const userdata=JSON.stringify(obj);
    axios
      .post("https://event0form.herokuapp.com/users", obj)
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
                  name="name"
                  placeholder="Enter Name"
                  autoComplete="off"
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
                  autoComplete="off"
                  required
                />
              </div>

              <div className="login__field">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="branch"
                  placeholder="Select Branch"
                  list="branches"
                  required
                />
                <datalist id="branches">
                  <option value="CSE" />
                  <option value="CSE-AIML" />
                  <option value="CSE-DS" />
                  <option value="CS" />
                  <option value="IT" />
                  <option value="CSIT" />
                </datalist>
              </div>

              <div className="login__field">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="section"
                  placeholder="Select Section"
                  list="sections"
                  required
                />
                <datalist id="sections">
                  <option value="1" />
                  <option value="2" />
                  <option value="3" />
                </datalist>
              </div>

              <div className="login__field">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="residence"
                  placeholder="Select Residence"
                  list="residences"
                  required
                />
                <datalist id="residences">
                  <option value="Hosteller" />
                  <option value="Day-Scholer" />
                </datalist>
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
