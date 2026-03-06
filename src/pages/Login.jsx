import React from "react";
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()

  return (
    <div className="p-4">
      <h3 className="fw-bold">Signin to your PopX account</h3>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>

          <Form.Control type="email" placeholder="Enter email address" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>

          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button
          variant="secondary"
          className="w-100"
          onClick={() => navigate("/account")}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
