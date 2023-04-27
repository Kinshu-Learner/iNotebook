import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const initialNotes = [
        {
          "_id": "644767ea8b7444d3a9c26a2a",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 2 for Some4 updated version",
          "description": "Random but Updated Description for Notes 2",
          "tag": "Business",
          "date": "2023-04-25T05:40:58.364Z",
          "__v": 0
        },
        {
          "_id": "64481ebb5867afc045d5f218",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 4 for Some4",
          "description": "Notes number 4",
          "tag": "Test Concurrently",
          "date": "2023-04-25T18:40:59.195Z",
          "__v": 0
        },
        {
          "_id": "644767ea8b7444d3a9c26a2a",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 2 for Some4 updated version",
          "description": "Random but Updated Description for Notes 2",
          "tag": "Business",
          "date": "2023-04-25T05:40:58.364Z",
          "__v": 0
        },
        {
          "_id": "64481ebb5867afc045d5f218",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 4 for Some4",
          "description": "Notes number 4",
          "tag": "Test Concurrently",
          "date": "2023-04-25T18:40:59.195Z",
          "__v": 0
        },
        {
          "_id": "644767ea8b7444d3a9c26a2a",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 2 for Some4 updated version",
          "description": "Random but Updated Description for Notes 2",
          "tag": "Business",
          "date": "2023-04-25T05:40:58.364Z",
          "__v": 0
        },
        {
          "_id": "64481ebb5867afc045d5f218",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 4 for Some4",
          "description": "Notes number 4",
          "tag": "Test Concurrently",
          "date": "2023-04-25T18:40:59.195Z",
          "__v": 0
        },
        {
          "_id": "644767ea8b7444d3a9c26a2a",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 2 for Some4 updated version",
          "description": "Random but Updated Description for Notes 2",
          "tag": "Business",
          "date": "2023-04-25T05:40:58.364Z",
          "__v": 0
        },
        {
          "_id": "64481ebb5867afc045d5f218",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 4 for Some4",
          "description": "Notes number 4",
          "tag": "Test Concurrently",
          "date": "2023-04-25T18:40:59.195Z",
          "__v": 0
        },
        {
          "_id": "644767ea8b7444d3a9c26a2a",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 2 for Some4 updated version",
          "description": "Random but Updated Description for Notes 2",
          "tag": "Business",
          "date": "2023-04-25T05:40:58.364Z",
          "__v": 0
        },
        {
          "_id": "64481ebb5867afc045d5f218",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 4 for Some4",
          "description": "Notes number 4",
          "tag": "Test Concurrently",
          "date": "2023-04-25T18:40:59.195Z",
          "__v": 0
        },
        {
          "_id": "644767ea8b7444d3a9c26a2a",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 2 for Some4 updated version",
          "description": "Random but Updated Description for Notes 2",
          "tag": "Business",
          "date": "2023-04-25T05:40:58.364Z",
          "__v": 0
        },
        {
          "_id": "64481ebb5867afc045d5f218",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 4 for Some4",
          "description": "Notes number 4",
          "tag": "Test Concurrently",
          "date": "2023-04-25T18:40:59.195Z",
          "__v": 0
        },
        {
          "_id": "644767ea8b7444d3a9c26a2a",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 2 for Some4 updated version",
          "description": "Random but Updated Description for Notes 2",
          "tag": "Business",
          "date": "2023-04-25T05:40:58.364Z",
          "__v": 0
        },
        {
          "_id": "64481ebb5867afc045d5f218",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 4 for Some4",
          "description": "Notes number 4",
          "tag": "Test Concurrently",
          "date": "2023-04-25T18:40:59.195Z",
          "__v": 0
        },
        {
          "_id": "644767ea8b7444d3a9c26a2a",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 2 for Some4 updated version",
          "description": "Random but Updated Description for Notes 2",
          "tag": "Business",
          "date": "2023-04-25T05:40:58.364Z",
          "__v": 0
        },
        {
          "_id": "64481ebb5867afc045d5f218",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 4 for Some4",
          "description": "Notes number 4",
          "tag": "Test Concurrently",
          "date": "2023-04-25T18:40:59.195Z",
          "__v": 0
        },
        {
          "_id": "644767ea8b7444d3a9c26a2a",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 2 for Some4 updated version",
          "description": "Random but Updated Description for Notes 2",
          "tag": "Business",
          "date": "2023-04-25T05:40:58.364Z",
          "__v": 0
        },
        {
          "_id": "64481ebb5867afc045d5f218",
          "user": "644207356cece4e59fa50e4a",
          "title": "Notes 4 for Some4",
          "description": "Notes number 4",
          "tag": "Test Concurrently",
          "date": "2023-04-25T18:40:59.195Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(initialNotes);

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;