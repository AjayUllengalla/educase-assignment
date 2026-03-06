import { Card, Image } from "react-bootstrap";

function Account() {
  return (
    <div>
      <div className="p-3 border-bottom fw-bold">Account Settings</div>

      <Card className="border-0 p-3">
        <div className="d-flex align-items-center">
          <Image
            src="https://randomuser.me/api/portraits/women/44.jpg"
            roundedCircle
            width="60"
          />

          <div className="ms-3">
            <h6 className="mb-0">Marry Doe</h6>

            <small className="text-muted">Marry@gmail.com</small>
          </div>
        </div>

        <p className="mt-3 text-muted">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
        </p>
      </Card>
    </div>
  );
}

export default Account;
