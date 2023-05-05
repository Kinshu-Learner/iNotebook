import React, { useContext, useEffect, useState, useRef } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

import { useNavigate } from 'react-router-dom';

export default function Notes() {

    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;

    const Navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            Navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    const [note, setNote] = useState({id: "" ,etitle: "", edescription: "", etag: "" })

    const ref = useRef(null)

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id ,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleOnClick = () => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
    }

    const handleOnChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }

    return (
        <>
            <AddNote />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Note
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label" >Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} minLength={3} required onChange={handleOnChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label" >Description</label>
                                    <input type="text" className="form-control" id="edescription" value={note.edescription} name='edescription' minLength={5} required onChange={handleOnChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label" >Tag</label>
                                    <input type="text" className="form-control" id="etag" value={note.etag} name='etag' onChange={handleOnChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" disabled={note.etitle.length<3 || note.edescription.length<5} className="btn btn-primary " data-bs-dismiss="modal" onClick={handleOnClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <code className="container">
                    {!notes.length && "Nothing to display here for now :)"}
                </code>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}
