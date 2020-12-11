import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import { Usercontext } from './Usercontext.js';

const Login = () => {

  const { log, setLog } = useContext(Usercontext);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const history = useHistory();
  const weburl = 'https://bloggerbs.herokuapp.com/api/employee/'

  const matchData = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(weburl);
      const dataarray = await result.data;

      const matched = dataarray.filter((each) => {
        if (each.email === email && each.password === pwd)
          return each
      });
      if (matched.length > 0) {
        console.log(matched[0]);
        setLog(matched[0]);
        history.push(`/admin`);
      }
      else {
        alert("incorrect user name or password");
        history.push('/');
      }
    }
    catch (e) {
      console.log(e);
    }
    setEmail('');
    setPwd('');
  }

  if (log.id !== '') {
    return (<>
      {history.push('/admin')}
    </>
    );
  }
  else {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="content">
            <h2>Login Form</h2>
            <form onSubmit={matchData}>
              <div className="form-group" >
                <label>Email:</label>
                <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="Enter email" name="email" autoComplete="off" required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" value={pwd} onChange={(e) => { setPwd(e.target.value) }} id="pwd" placeholder="Enter password" name="pwd" required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
