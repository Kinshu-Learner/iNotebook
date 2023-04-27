import React from 'react'

export default function Noteitem(props) {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" style={{ height: "150px" }}>
                <div className="card-body">
                    <div className="d-flex" >
                        <h5 className="card-title" style={{width:"100%"}}>{note.title}</h5>
                        <div className="d-flex icons">
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="Delete" />
                            <img className='icon' src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" alt="Edit" />
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}
