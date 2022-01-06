import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function UnauthorizedPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
      <div><h1 className="mb-5 text-danger">Unauthorized</h1></div>
      <div><Link to="/"><Button variant="success">Back to HomePage</Button></Link></div>
    </div>
  );
}

export default UnauthorizedPage;