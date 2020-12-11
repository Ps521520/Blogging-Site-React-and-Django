import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Admnav from './Admnav';
import axios from 'axios';
import { Usercontext } from './Usercontext';


const Admin = () => {
    const history = useHistory();
    const [data, setData] = useState([]);
    const { log, setLog } = useContext(Usercontext);
    const weburl = `http://localhost:8000/api/blog/`;

    const DeleteData = async (id) => {
        try {
            const result = await axios.delete(`${weburl}${id}/`);
            console.log(result);
            console.log("deleted");
            fetchdata();
        }
        catch (e) {
            console.log(e);
        }

    }

    const displayData = (list) => {
        if (list === undefined)
            return null;
        return (
            list.map((item) => (
                <div key={item.id} className="item" >
                    <h2>{item.title}</h2>
                    <label className="lbl">Author Name:{item.author}</label>
                    <label className="lbl">Date and Time of Publish:{item.date}</label>
                    <h5>{item.text}</h5>
                    <Link to={`/updateblog/${item.id}`} className="btn btn-success mr-2" id="update" style={{ marginRight: "10px" }} >Update</Link>
                    <button onClick={() => { DeleteData(item.id) }} className="btn btn-danger" id="delete" >Delete</button>
                </div >
            ))
        );
    }


    const fetchdata = async () => {

        try {
            const result = await axios.get(weburl);
            const data = await result.data;
            const modidata = data.filter((each) => {
                if (each.writer === parseInt(log.id))
                    return each
            });
            console.log(modidata);
            console.log(log);
            setData(modidata);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])

    if (log.id == '') {
        return (<>
            {history.push('/login')}
        </>
        );
    }
    else {
        return (
            <>
                <Admnav />
                <div className="container">
                    <div className="content">
                        {displayData(data)}
                    </div>
                </div>
            </>
        );
    }
}

export default Admin;
