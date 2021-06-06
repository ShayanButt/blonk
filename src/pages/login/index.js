import React, { useState } from "react";
import { Breadcrumb, Form, InputGroup } from "react-bootstrap";
import { RiRotateLockFill } from "react-icons/ri";
import "./index.css";

function Login() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div>
      <div className="container-fluid container_wide px-5">
        <div className="d-flex py-5 row">
          <div className="left col-6 col-md-6">
            <p>My Profile:</p>
          </div>
          <div className="right col-6 col-md-6">
            <Breadcrumb className="bread">
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                My Profile
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="form row">
              <div className="col-md-12 form_title">
                <p className="form_pass py-2">Password & Security</p>
              </div>
            </div>
            <div className="row form_field py-4">
              <div className="col-md-4">
                <label className="py-2">Current Password</label>
                <InputGroup hasValidation className="align-items-center">
                  <Form.Control
                    className="input_field"
                    type="text"
                    aria-describedby="inputGroupPrepend"
                    maxlength="9"
                    minlength="5"
                    required
                  />
                  <InputGroup.Append>
                    <RiRotateLockFill />
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    Password must be 6 to 8 characters.
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col-md-4">
                <label className="py-2">New Password</label>
                <InputGroup hasValidation className="align-items-center">
                  <Form.Control
                    className="input_field"
                    type="text"
                    aria-describedby="inputGroupPrepend"
                    maxlength="9"
                    minlength="5"
                    required
                  />
                  <InputGroup.Append>
                    <RiRotateLockFill />
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    Password must be 6 to 8 characters.
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col-md-4">
                <label className="py-2">Repeat New Password</label>
                <InputGroup hasValidation className="align-items-center">
                  <Form.Control
                    className="input_field"
                    type="text"
                    aria-describedby="inputGroupPrepend"
                    maxlength="9"
                    minlength="5"
                    required
                  />
                  <InputGroup.Append>
                    <RiRotateLockFill />
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    Password must be 6 to 8 characters.
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
            </div>
            <button className="btn-form my-4">Save Changes</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
