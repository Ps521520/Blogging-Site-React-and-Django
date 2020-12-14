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
    const [image, setImage] = useState(null);
    const history = useHistory();


    const submitForm = async (e) => {
        e.preventDefault();
        console.log(image);
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("author", author);
        formData.append("text", text);
        formData.append("writer", parseInt(log.id));
        try {
            const result = await axios.put(weburl, formData);
            console.log(result)
            setTitle('');
            setAuthor('');
            setText('');
            setDate('');
            setImage(null);
        }
        catch (e) {
            console.log(e);
        }
        console.log(formData);
        alert("updated successfully back returning to homepage");
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
                        <form onSubmit={submitForm} >
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Fields</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Image</td>
                                        <td><input type="file" name="img" className="img-responsive" onChange={(e) => { setImage(e.target.files[0]) }} /></td>
                                    </tr>
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