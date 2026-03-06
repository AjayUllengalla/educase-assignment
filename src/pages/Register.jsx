import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../register.css";

function Register() {

const navigate = useNavigate();

return (

<div className="register-wrapper">

<div className="register-card">

<div className="back-link">← Back</div>

<h2 className="register-title">
Create your <br/> PopX account
</h2>

<Form>

<div className="form-group-custom">
<label>Full Name*</label>
<input type="text" placeholder="Enter Full Name"/>
</div>

<div className="form-group-custom">
<label>Phone number*</label>
<input type="text" placeholder="Enter Phone Number"/>
</div>

<div className="form-group-custom">
<label>Email address*</label>
<input type="email" placeholder="Enter your Email"/>
</div>

<div className="form-group-custom">
<label>Password*</label>
<input type="password" placeholder="Enter Password"/>
</div>

<div className="form-group-custom">
<label>Company name</label>
<input type="text" placeholder="Enter Company Name"/>
</div>

<div className="agency-section">

<p>Are you an Agency?*</p>

<div className="radio-group">

<label>
<input type="radio" name="agency" defaultChecked/>
<span className="radio-custom"></span>
Yes
</label>

<label>
<input type="radio" name="agency"/>
<span className="radio-custom"></span>
No
</label>

</div>

</div>

<button
className="create-btn"
onClick={() => navigate("/account")}
>

Create Account

</button>

</Form>

</div>

</div>

)

}

export default Register;