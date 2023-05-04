import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className='ms-2' src="https://cdn-icons-png.flaticon.com/512/5956/5956876.png" alt="." style={{ height: "25px" }} /> iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    <Link className="btn btn-primary mx-1" to="/login" type="submit">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" type="submit">Signup</Link>
                </div>
            </div>
        </nav>
    )
}
