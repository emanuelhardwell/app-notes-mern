import React, { useEffect, useState, Component } from "react";
import axios from "axios";

export const CreateUser = () => {
  /*   componentDidMount */

  const [user, setUser] = useState({
    users: [],
  });

  const [input, setInput] = useState({
    username: "",
  });

  const { users } = user;
  const { username } = input;

  const getData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users");
    console.log(data);
    setUser({
      ...user,
      users: data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users", {
      username: username,
    });
    setInput({
      username: "",
    });
    getData();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    getData();
  };

  return (
    /*  */
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header bg-primary">
            <h3>Create new user</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="name"
                  autoComplete="off"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={handleChange}
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
          <li className="list-group-item text-center bg-primary">
            Lis of users
          </li>
          {users.map((u) => (
            <li
              className="list-group-item list-group-item-action"
              key={u._id}
              onDoubleClick={() => handleDelete(u._id)}
            >
              {u.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
