// src/NoteForm.js
import React, { useState, useEffect } from 'react';

const NoteForm = ({ addNote, editIndex, notes }) => {
  const [note, setNote] = useState('');
  
  useEffect(() => {
    if (editIndex !== null) {
      setNote(notes[editIndex]);
    }
  }, [editIndex, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() !== '') {
      addNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">{editIndex !== null ? 'Edit' : 'Add'}</button>
    </form>
  );
};

export default NoteForm;
