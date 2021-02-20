import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";

export const CreateNote = () => {
  /*  */
  const [user, setUser] = useState({
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
  });

  const { users, userSelected, date } = user;

  const getData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users");
    /* console.log(data); */
    setUser({
      ...user,
      users: data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  const handleChangeDatePicker = (date) => {
    setUser({
      ...user,
      date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-header bg-primary">
            <h2>Create Note</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <select
                  name="userSelected"
                  className="form-control"
                  onChange={handleChange}
                >
                  {users.map((user) => (
                    <option key={user._id} value={user.username}>
                      {user.username}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="title"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="content"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group mb-2">
                <DatePicker
                  className="form-control"
                  selected={date}
                  onChange={handleChangeDatePicker}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
