import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Usercontext } from './Usercontext';
import axios from 'axios';
import Admnav from './Admnav';


axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


export const Profile = () => {
    const { log, setLog } = useContext(Usercontext);
    const history = useHistory();
    const [data, setData] = useState({
        'id': '',
        'firstname': '',
        'lastname': '',
        'mobileno': '',
        'email': '',
        'password': ''
    })

    const weburl = `http://localhost:8000/api/employee/${log.id}/`;

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
            const result = await axios.put(weburl, data);
            console.log(result)
            history.push('/admin');
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

    const fetchdata = async () => {

        if (log.id != '') {
            try {
                const result = await axios.get(weburl);
                const profdata = await result.data;
                setData(profdata)
                console.log(profdata);
            }
            catch (e) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])


    if (log.id === '') {
        return (<>
            {history.push('/')}
        </>
        );
    }
    else {
        return (
            <>
                <Admnav />
                <div className="container">
                    <div className="content">
                        <h2>Registration Updation Form</h2>
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
                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </>
        );

    }
}

export default Profile;