import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';

export default function Notes() {    
    const context = useContext(NoteContext);
    const {notes, setNotes} = context;
    return (
        <div className='row'>
            {notes.map((note) => {
                return <Noteitem note = {note} key={note._id}/>;
            })}
        </div>
    )
}
