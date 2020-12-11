import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Admnav from './Admnav';
import { Usercontext } from './Usercontext';

const UpdateBlog = () => {
    const { log, setLog } = useContext(Usercontext);
    const { id } = useParams();
    const weburl = `https://bloggerbs.herokuapp.com/api/blog/${id}/`;
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const history = useHistory();


    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.put(weburl,
                {
                    "title": title,
                    "author": author,
                    "text": text,
                    "writer": log.id
                }
            );
            console.log(result)
            setTitle('');
            setAuthor('');
            setText('');
            setDate('');
        }
        catch (e) {
            console.log(e);
        }
        history.push('/admin');
    }

    const fetchdata = async () => {

        try {
            const result = await axios.get(weburl);
            const data = await result.data;
            setTitle(data.title);
            setAuthor(data.author);
            setText(data.text);
            console.log(data);
        }
        catch (e) {
            console.log(e);
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
                        <form onSubmit={submitForm} method="post" >
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Fields</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Title</td>
                                        <td><input type="text" value={title} placeholder="Enter Title Here" className="inpt" onChange={(e) => { setTitle(e.target.value) }} required /></td>
                                    </tr>
                                    <tr>
                                        <td>Created By</td>
                                        <td><input type="text" value={author} placeholder="Enter Author Name Here" className="inpt" onChange={(e) => { setAuthor(e.target.value) }} required /></td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td><input type="date" value={date} placeholder="Select Date Field" className="inpt" onChange={(e) => { setDate(e.target.value) }} /></td>
                                    </tr>
                                    <tr>
                                        <td>Text</td>
                                        <td><textarea typeof="text" value={text} placeholder="write text here" className="inpt" onChange={(e) => { setText(e.target.value) }} required /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <center><button type="submit" className="btn btn-success">Submit</button></center>
                        </form>
                    </div >
                </div>
            </>
        );
    }
}

export default UpdateBlog;