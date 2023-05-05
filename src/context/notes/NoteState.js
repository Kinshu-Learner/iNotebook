import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = []

  const {showAlert} = props;

  const host = "http://localhost:5000"

  const [notes, setNotes] = useState(initialNotes);

  const getNotes = async ()=>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
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
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();

    setNotes(notes.concat(note));
    showAlert('Note has been Added Successfully!', "success");
  }

  const deleteNote = async (id) => {

    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
    showAlert('Note has been Deleted Successfully!', "success");
  }

  const editNote = async (id, title, description, tag) => {

    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    getNotes();
    showAlert('Note has been Updated Successfully!', "success");
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
};

export default NoteState;