import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const [credentials, setCredentials] = useState({email: "", password: ""})

    const {showAlert} = props;

    const Navigate = useNavigate();

    const handleOnSubmit = async (event)=>{

        event.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: "POST",
            headers:{
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})           
        });

        const json = await response.json();
        console.log(json);
        
        if(json.success){
            // Redirect to Home page
            localStorage.setItem('token', json.authtoken);
            Navigate("/");
            showAlert('Logged In Successfully!', "success");
        }
        else{
            showAlert('Please Login with Correct Credentials!', "danger");
        }

    };

    const onChange = (event)=>{
        setCredentials({...credentials, [event.target.name]: event.target.value})
    };

    return (
        <div>
            <h1 className="text-center">Login</h1>
            <form className={`${window.screen.width<960?'':'w-50'} m-auto`} onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} value={credentials.password} required id="password" name="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}