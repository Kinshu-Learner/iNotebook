import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name": "SomeThing",
        "roll": 45
    }

    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "KuchhToh",
                "roll": 23
            });
        }, 2000);
    }
    return(
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;