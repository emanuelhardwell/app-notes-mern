import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Notes App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                List notes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create note
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                Create user
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
