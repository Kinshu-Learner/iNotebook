import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = []

  const host = "http://localhost:5000"

  const [notes, setNotes] = useState(initialNotes);

  const getNotes = async ()=>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MjA3MzU2Y2VjZTRlNTlmYTUwZTRhIn0sImlhdCI6MTY4MjA3ODkyOX0.1By5noBnZb7jJP2_Ke-f2ZnH-ir39VHTjwRdpoE5K1A"
      }
    });

    const json = await response.json();

    setNotes(json);
  };

  const addNote = async (title, description, tag) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MjA3MzU2Y2VjZTRlNTlmYTUwZTRhIn0sImlhdCI6MTY4MjA3ODkyOX0.1By5noBnZb7jJP2_Ke-f2ZnH-ir39VHTjwRdpoE5K1A"
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();

    setNotes(notes.concat(note));
  }

  const deleteNote = async (id) => {

    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MjA3MzU2Y2VjZTRlNTlmYTUwZTRhIn0sImlhdCI6MTY4MjA3ODkyOX0.1By5noBnZb7jJP2_Ke-f2ZnH-ir39VHTjwRdpoE5K1A"
      }
    });

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }

  const editNote = async (id, title, description, tag) => {

    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MjA3MzU2Y2VjZTRlNTlmYTUwZTRhIn0sImlhdCI6MTY4MjA3ODkyOX0.1By5noBnZb7jJP2_Ke-f2ZnH-ir39VHTjwRdpoE5K1A"
      },
      body: JSON.stringify({title, description, tag})
    });

    getNotes();
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
};

export default NoteState;