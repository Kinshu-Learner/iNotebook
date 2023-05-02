import React, {useContext} from 'react'
import NoteContext from "../context/notes/NoteContext";

export default function Noteitem(props) {
    const context = useContext(NoteContext);
    const {deleteNote, editNote} = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" style={{ height: "150px" }}>
                <div className="card-body">
                    <div className="d-flex" >
                        <h5 className="card-title" style={{ width: "100%" }}>{note.title}</h5>
                        <div className="d-flex icons">
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="Delete" onClick={()=>{deleteNote(note._id)}} />
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" alt="Edit"  onClick={()=>{updateNote(note)}}/>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}
