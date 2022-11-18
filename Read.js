import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  function getData() {
    axios
      .get("https://637722055c4777651214e2fc.mockapi.io/crud-operation")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }
  function handleDelete(id) {
    alert("Are You Sure You want to Delete it..?");
    axios
      .delete(
        `https://637722055c4777651214e2fc.mockapi.io/crud-operation/${id}`
      )
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, mobile, email, address) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);
    localStorage.setItem("address", address);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-around">
        <h2>Read operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.mobile}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.address}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.mobile,
                            eachData.email,
                            eachData.address
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
