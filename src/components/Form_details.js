import React from "react";
import "../css/reg_form.css";
import { useFormik } from "formik";
import { validationSchema } from "./Validations";
import { useHistory } from "react-router-dom";
import blacklogo from "../assets/black.png";
import axios from "axios";

const Form2 = () => {
  const email = localStorage.getItem("email");

  const initialValues = {
    email:email,
    name: "",
    studentno: "",
    phone: "",
    branch: "",
    section: "",
    residence: "",
  };

  const onSubmit = values => {
    console.log(values);
    senddata();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const senddata = async () => {
    axios
      .post("https://event0form.herokuapp.com/users", initialValues)
      .then(function (response) {
        console.log(response);
        history.push("/");
        history.go();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const history = useHistory();

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <div>
            <img src={blacklogo} alt="Logo" height="100" width="120" />
          </div>
          <form className="login form2" onSubmit={formik.handleSubmit}>
            <div className="scroll">
              <div className="login__field">
                <input
                  type="email"
                  id="field"
                  className="login__input"
                  name="email"
                  placeholder="Enter Email"
                  readOnly
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="errors">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="login__field">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="name"
                  placeholder="Enter Name"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="errors">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="login__field">
                <input
                  type="number"
                  id="fields"
                  className="login__input"
                  name="studentno"
                  placeholder="Enter Student Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.studentno}
                />
                {formik.touched.studentno && formik.errors.studentno ? (
                  <div className="errors">{formik.errors.studentno}</div>
                ) : null}
              </div>

              <div className="login__field">
                <input
                  type="number"
                  id="fields"
                  className="login__input"
                  placeholder="Enter Phone Number"
                  name="phone"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="errors">{formik.errors.phone}</div>
                ) : null}
              </div>

              <div className="login__field">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="branch"
                  list="branches"
                  placeholder="Select Branch"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.branch}
                />
                <datalist id="branches">
                  <option value="CSE" />
                  <option value="CSE-AIML" />
                  <option value="CSE-DS" />
                  <option value="CS" />
                  <option value="IT" />
                  <option value="CSIT" />
                </datalist>
                {formik.touched.branch && formik.errors.branch ? (
                  <div className="errors">{formik.errors.branch}</div>
                ) : null}
              </div>

              <div className="login__field">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="section"
                  placeholder="Select Section"
                  list="sections"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.section}
                />
                <datalist id="sections">
                  <option value="1" />
                  <option value="2" />
                  <option value="3" />
                </datalist>
                {formik.touched.section && formik.errors.section ? (
                  <div className="errors">{formik.errors.section}</div>
                ) : null}
              </div>

              <div className="login__field">
                <input
                  type="text"
                  id="fields"
                  className="login__input"
                  name="residence"
                  placeholder="Select Residence"
                  list="residences"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.residence}
                />
                <datalist id="residences">
                  <option value="Hosteller" />
                  <option value="Day-Scholer" />
                </datalist>
                {formik.touched.residence && formik.errors.residence ? (
                  <div className="errors">{formik.errors.residence}</div>
                ) : null}
              </div>
            </div>

            <button className="login__submit" type="submit">
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
