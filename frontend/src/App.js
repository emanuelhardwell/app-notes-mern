/*  */
/*  */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { NotesList } from "./components/NotesList";
import { CreateUser } from "./components/CreateUser";
import { CreateNote } from "./components/CreateNote";

function App() {
  return (
    <Router>
      <Navigation />

      <div className="container p-4">
        <Route exact path="/" component={NotesList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
