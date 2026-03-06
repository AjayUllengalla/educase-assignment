import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Login(){

const navigate = useNavigate()

return(

<div className="page-container">

<div className="mobile-container">

<h2 className="title">
Signin to your <br/> PopX account
</h2>

<p className="subtitle">
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
</p>

<Form>

<Form.Group className="mb-3">

<Form.Label className="label-text">
Email Address
</Form.Label>

<Form.Control
className="input-box"
type="email"
placeholder="Enter email address"
/>

</Form.Group>

<Form.Group className="mb-4">

<Form.Label className="label-text">
Password
</Form.Label>

<Form.Control
className="input-box"
type="password"
placeholder="Enter password"
/>

</Form.Group>

<Button
variant="secondary"
className="w-100"
onClick={()=>navigate("/account")}
>

Login

</Button>

</Form>

</div>

</div>

)

}

export default Login