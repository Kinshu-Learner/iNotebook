import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {

    const Navigate = useNavigate();

    const {showAlert} = props;

    const handleOnSubmit = async (event) => {

        if(credentials.password !== credentials.cpassword){
            alert('Passwords do not match');
            return;
        }

        event.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Redirect to Home page
            localStorage.setItem('token', json.authtoken);
            Navigate("/")
            showAlert('Created Account Successfully!', "success");
        }
        else {
            showAlert('Oops! Something went wrong...', "danger");
        }

    };

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <div id="signupdiv">
            <h1 className="text-center" style={{marginTop:"40px"}}>Sign Up</h1>
            <form className={`${window.screen.width < 960 ? 'w-75' : 'w-50'} m-auto`} onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="name" onChange={onChange} value={credentials.name} required minLength={3} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" name="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name="password" minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange} value={credentials.cpassword} id="cpassword" name="cpassword" minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}
