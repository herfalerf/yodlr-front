import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";

const SignupForm = ({ signup }) => {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    state: "active",
  };

  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "SignupForm",
    "signup=",
    typeof signup,
    "formData=",
    formData,
    "formErrors=",
    formErrors
  );

  //handle form data change.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  //hanbdle form data submit
  async function handleSubmit(e) {
    e.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      history.push("/");
    } else {
      setFormErrors(result.errors);
    }
  }

  return (
    <div className="SignupForm">
      <div className="SignupForm-container container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 className="mb-3">Sign Up</h1>
        <div className="SignupForm-card card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  className="form-control"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  className="form-control"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary float-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
