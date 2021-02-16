import React, { useEffect, useState, Component } from "react";
import axios from "axios";

export const CreateUser = () => {
  /*   componentDidMount */
  const [user, setUser] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users");
    /* console.log(data); */
    setUser(data);
  };

  useEffect(() => {
    getData();
  }, [user]);

  return (
    /*  */
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h3>Create new user</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="name"
                  autoComplete="off"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary w-100">Save User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          <li className="list-group-item text-center">Lis of users</li>
          {user.map((u) => (
            <li className="list-group-item list-group-item-action" key={u._id}>
              {u.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
