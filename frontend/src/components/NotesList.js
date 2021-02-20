import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

export const NotesList = () => {
  const [stateNotes, setStateNotes] = useState({
    notes: [],
  });

  const { notes } = stateNotes;

  const getNotes = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");
    /* console.log(data); */
    setStateNotes({
      ...stateNotes,
      notes: data,
    });
  };

  useEffect(() => {
    getNotes();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    getNotes();
  };

  return (
    <div>
      <div className="row">
        {notes.map(({ _id, title, content, date, author }) => (
          <div className="col-md-4 my-1" key={_id}>
            <div className="card">
              <div className="card-header bg-primary">
                <h5>{title}</h5>
              </div>
              <div className="card-body text-dark">
                <p className="card-text"> {author} </p>
                <p className="card-text"> {content} </p>
                <p className="blockquote-footer"> {format(date)} </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(_id)}
                >
                  Delete
                </button>
                <button className="btn btn-success btn-sm">Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
