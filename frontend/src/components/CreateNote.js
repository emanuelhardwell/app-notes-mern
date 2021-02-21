import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/* import ReactDatePicker from "react-datepicker"; */

export const CreateNote = (props) => {
  /*  */
  const [user, setUser] = useState({
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
    /*datos generados  */
    editing: false,
    id: "",
  });

  const { users, userSelected, date, title, content, editing, id } = user;

  const getData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users");
    /* console.log(data[0].username); */
    setUser({
      ...user,
      /* users: data, */
      users: data.map((user) => user.username),
      userSelected: data[0].username,
    });

    if (props.match.params.id) {
      const { data } = await axios.get(
        `http://localhost:5000/api/notes/${props.match.params.id}`
      );

      console.log(data);
      setUser({
        ...user,
        editing: true,
        id: props.match.params.id,
        title: data.title,
        userSelected: data.author,
        content: data.content,
        date: new Date(data.date),
      });
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: title,
      content: content,
      date: date,
      author: userSelected,
    };
    if (editing) {
      await axios.put(`http://localhost:5000/api/notes/${id}`, newNote);
    } else {
      await axios.post("http://localhost:5000/api/notes", newNote);
    }

    /*  window.location.href = "/"; */
    props.history.push("/");
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
                  value={userSelected}
                  onChange={handleChange}
                >
                  {users.map((username) => (
                    <option key={username} value={username}>
                      {username}
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
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="content"
                  required
                  value={content}
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
              <div className="form-group">
                <button className="btn btn-primary w-100">Save user</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
