import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Content = () => {

  const [data, setData] = useState([]);
  const weburl = 'https://bloggerbs.herokuapp.com/api/blog/';


  const displayData = (list) => {
	  
    const getimg = (item) => {
      if (item.image)
        return <img src={`${item.image}`} alt={item.title} style={{ width: "100%", height: "400px" }} />
      else
        return null
    }
    if (list === undefined)
      return null;
    return (
      list.map((item) => (
        <div key={item.id} className="item" >
          <h2>{item.title}</h2>
          <label className="lbl">Author Name:{item.author}</label>
          <label className="lbl">Date and Time of Publish:{item.date}</label>
		  {getimg(item)}
          <h5>{item.text}</h5>
        </div >
      ))
    );
  }


  const fetchdata = async () => {

    try {
      const result = await axios.get(weburl);
      const data = await result.data;
      console.log(data);
      setData(data);
    }
    catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    fetchdata();
  }, [])


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          {displayData(data)}
        </div>
      </div>
    </>
  );
}

export default Content;
