import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {

  const Navigate = useNavigate();

  const [aboutid, setAboutid] = useState(null)
  const [aboutname, setAboutname] = useState(null)
  const [aboutemail, setAboutemail] = useState(null)
  const [aboutdate, setAboutdate] = useState(null)

  const handleOnAbout = async () => {
    const response = await fetch('http://localhost:5000/api/auth/getuser', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "auth-token": localStorage.getItem('token')
      }
    })
    const json = await response.json();
    const id = json._id;
    const name = json.name;
    const email = json.email;
    const date = new Date(json.date).toGMTString();

    setAboutid(id);
    setAboutname(name);
    setAboutemail(email);
    setAboutdate(date);
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      Navigate('/login');
    }
    else {
      handleOnAbout();
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="d-flex">
        <span className="">
          <h1 className="mb-3">About The User Profile</h1>
          <p className="my-3"><b>Id:</b> {aboutid}</p>
          <p className="my-3"><b>Name:</b> {aboutname}</p>
          <p className="my-3"><b>Email:</b> {aboutemail}</p>
          <p className="my-3"><b>Date of account creation:</b> {aboutdate}</p>
        </span>
      </div>

    </>
  )
}
