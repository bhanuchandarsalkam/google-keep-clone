// src/NoteForm.js
// src/NoteList.js
import React from 'react';

const NoteList = ({ notes, deleteNote, editNote }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <div key={index} className="note">
          <p>{note}</p>
          <button onClick={() => editNote(index)}>Edit</button>
          <button onClick={() => deleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
