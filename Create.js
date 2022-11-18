import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://637722055c4777651214e2fc.mockapi.io/crud-operation", {
        name: name,
        mobile: mobile,
        address: address,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-around ">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3 w-50 m-4 p-1">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3 w-50 m-4 p-1">
          <label className="form-label">Mobile</label>
          <input
            type="tel"
            className="form-control"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="mb-3 w-50 m-4 p-1">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 w-50 m-4 p-1">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary m-4 p-1 "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
