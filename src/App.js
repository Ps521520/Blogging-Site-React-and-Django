import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Content from './Content.js';
import Category from './Category.js';
import Login from './Login.js';
import Register from './Register.js';
import AboutUs from './AboutUS.js';
import ContactUs from './ContactUs.js';
import Admin from './Admin.js';
import CreateBlog from './CreateBlog';
import UpdateBlog from './UpdateBlog';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Usercontext } from './Usercontext.js';
import Profile from './Profile';
import Footer from './Footer';

function App() {

  const [log, setLog] = useState({
    'id': '',
    'firstname': '',
    'lastname': '',
    'email': '',
    'password': '',
    'mobileno': ''
  });

  return (
    <><div>
      <Switch>
        <Usercontext.Provider value={{ log, setLog }}>
          <Route exact path='/' component={Content} />
          <Route exact path='/category' component={Category} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route exact path='/contactus' component={ContactUs} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/createblog' component={CreateBlog} />
          <Route exact path='/updateblog/:id' component={UpdateBlog} />
          <Route exact path='/account/:user' component={Content} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/logout" render={() => <Redirect to="/" />} />
        </Usercontext.Provider>
      </Switch>
      <Footer />
    </div>
    </>
  );
}

export default App;
