import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Usercontext } from './Usercontext';

export const Admnav = () => {
    const { log, setLog } = useContext(Usercontext);

    const logoutdata = () => {
        setLog({
            'id': '',
            'firstname': '',
            'lastname': '',
            'email': '',
            'password': '',
            'mobileno': ''
        });
    }

    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to={`/admin`}>FreshBlogs</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li ><Link to={`/admin`}>Home</Link></li>
                        <li ><Link to={`/category`}>Cateogry</Link></li>
                        <li ><Link to={`/aboutus`}>About Us</Link></li>
                        <li ><Link to={`/contactus`}>Contact Us</Link></li>
                        <li ><Link to={`/createblog`} >Create Blog</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right" id="logreg" >
                        <li><Link to="/logout" onClick={logoutdata} ><span className="glyphicon glyphicon-user"></span> Logout</Link></li>
                        <li><Link to="/profile" ><span className="glyphicon glyphicon-log-in"></span>Profile @ {log.name} </Link> </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Admnav;