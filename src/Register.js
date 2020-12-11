import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const Register = () => {

  const [data, setData] = useState({
    'firstname': '',
    'lastname': '',
    'mobileno': '',
    'email': '',
    'password': ''
  })

  const weburl = 'https://bloggerbs.herokuapp.com/api/employee/';

  const setValue = (e) => {

    const { name, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value
      };
    });
  }

  const addData = async (e) => {
    e.preventDefault()
    try {
      console.log(data);
      const result = await axios.post(weburl, data);
      console.log(result)
    }
    catch (e) {
      console.log(e);
    }

    setData({
      'firstname': '',
      'lastname': '',
      'mobileno': '',
      'email': '',
      'password': ''
    });
  }



  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <h2>Registration Form</h2>
          <form onSubmit={addData} method="post" >
            <div className="form-group" >
              <label>First Name:</label>
              <input type="text" className="form-control" value={data.firstname} onChange={setValue} id="firstname" placeholder="Enter First Name" name="firstname" autoComplete="off" required />
            </div>
            <div className="form-group" >
              <label>Last Name:</label>
              <input type="text" className="form-control" value={data.lastname} onChange={setValue} id="lastname" placeholder="Enter Last Name" name="lastname" autoComplete="off" required />
            </div>
            <div className="form-group" >
              <label>Mobile Number:</label>
              <input type="number" className="form-control" value={data.mobileno} onChange={setValue} id="mobileno" placeholder="Enter Mobile Number" name="mobileno" autoComplete="off" required />
            </div>
            <div className="form-group" >
              <label>Email:</label>
              <input type="email" className="form-control" value={data.email} onChange={setValue} id="email" placeholder="Enter email" name="email" autoComplete="off" required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" value={data.password} onChange={setValue} id="pwd" placeholder="Enter password" name="password" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
