import React, { useState, useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function Addnote() {

  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const context = useContext(NoteContext);

  const { addNote } = context;

  const handleOnClick = (event) => {
    event.preventDefault();
    addNote(note.title, note.description, note.tag)
    setNote({title: "", description: "", tag: ""})
  }

  const handleOnChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <h2>Add a New Note</h2>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" >Title</label>
          <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={note.title} minLength={3} required onChange={handleOnChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >Description</label>
          <input type="text" className="form-control" id="description" name='description' value={note.description} required minLength={5} onChange={handleOnChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >Tag</label>
          <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={handleOnChange} />
        </div>
        <button type="submit" disabled={note.title.length<3 || note.description.length<5} className="btn btn-primary" onClick={handleOnClick}>Add Note</button>
      </form>
      <h2>View Notes</h2>
    </div>
  )
}
