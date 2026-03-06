import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex flex-column justify-content-end p-4">
      <h3 className="fw-bold">Welcome to PopX</h3>

      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Button
        className="mb-3"
        style={{ background: "#6C25FF", border: "none" }}
        onClick={() => navigate("/register")}
      >
        Create Account
      </Button>

      <Button variant="light" onClick={() => navigate("/login")}>
        Already Registered? Login
      </Button>
    </div>
  );
}

export default Welcome;
