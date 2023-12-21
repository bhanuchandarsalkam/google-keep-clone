// src/App.js
import React, { useState } from 'react';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addNote = (note) => {
    if (editIndex === null) {
      setNotes([...notes, note]);
    } else {
      const newNotes = [...notes];
      newNotes[editIndex] = note;
      setNotes(newNotes);
      setEditIndex(null);
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    setEditIndex(null);
  };

  const editNote = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>Google Keep Clone</h1>
      <NoteForm addNote={addNote} editIndex={editIndex} notes={notes} />
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;
