/*  */
const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.send("Hola USERS");
notesCtrl.createNote = (req, res) => res.send("Hola USERS");

notesCtrl.getNote = (req, res) => res.send("Hola USERS");
notesCtrl.updateNote = (req, res) => res.send("Hola USERS");
notesCtrl.deleteNote = (req, res) => res.send("Hola USERS");

module.exports = notesCtrl;
