import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

export default function Notes() {
    const context = useContext(NoteContext);
    const { notes } = context;
    return (
        <>
            <AddNote/>
            <div className='row'>
                {notes.map((note) => {
                    return <Noteitem note={note} key={note._id} />;
                })}
            </div>
        </>
    )
}
