import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../register.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <div className="back-link" onClick={() => navigate("/")}>
          ← Back
        </div>

        <h2 className="register-title">
          Signin to your <br /> PopX account
        </h2>

        <p style={{ color: "#777", marginBottom: "25px" }}>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>

        <Form>
          <div className="form-group-custom">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" />
          </div>

          <div className="form-group-custom">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <button className="login-btn" onClick={() => navigate("/account")}>
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
