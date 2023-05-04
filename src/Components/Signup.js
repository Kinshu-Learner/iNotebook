import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    
    const Navigate = useNavigate();

    const handleOnSubmit = async (event)=>{

        event.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/createuser",{
            method: "POST",
            headers:{
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({name: credentials.name ,email: credentials.email, password: credentials.password})
        });

        const json = await response.json();
        console.log(json);
        
        if(json.success){
            // Redirect to Home page
            localStorage.setItem('token', json.authtoken);
            Navigate("/")
        }
        else{
            alert("Invalid Credentials")
        }

    };

    const [credentials, setCredentials] = useState({name: "", email:"", password:"", cpassword:""})

    const onChange = (event)=>{
        setCredentials({...credentials, [event.target.name]:event.target.value})
    }

  return (
    <div>
      <h1 className="text-center">Sign Up</h1>
            <form className={`${window.screen.width<960?'':'w-50'} m-auto`} onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="name" onChange={onChange} value={credentials.name} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" name="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name="password"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange} value={credentials.cpassword} id="cpassword" name="cpassword"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}
