import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function About() {
    const a = useContext(NoteContext);
    useEffect(() => {
      a.update();
      // eslint-disable-next-line
    }, [])
    
  return (
    <div>
      This is About Page of a guy called {a.state.name} and his roll number is {a.state.roll}
    </div>
  )
}
