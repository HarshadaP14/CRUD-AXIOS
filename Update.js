import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setMobile(localStorage.getItem("mobile"));
    setEmail(localStorage.getItem("email"));
    setAddress(localStorage.getItem("address"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://637722055c4777651214e2fc.mockapi.io/crud-operation/${id}`, {
        name: name,
        mobile: mobile,
        address: address,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <h2>Update</h2>

      <form>
        <div className="mb-3 w-50 m-4 p-1">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3 w-50 m-4 p-1">
          <label className="form-label">Mobile</label>
          <input
            type="tel"
            value={mobile}
            className="form-control"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="mb-3 w-50 m-4 p-1">
          <label className="form-label">Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 w-50 m-4 p-1">
          <label className="form-label">Address</label>
          <input
            type="text"
            value={address}
            className="form-control"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary m-4 p-1 "
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-primary">Back</button>
        </Link>
      </form>
    </>
  );
};

export default Update;
