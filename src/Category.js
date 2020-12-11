import Admnav from './Admnav';
import Navbar from './Navbar';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Usercontext } from './Usercontext';
import Noitem from './Noitem';

const Category = () => {
  const [search, setSearch] = useState('');
  const [searcheddata, setSearcheddata] = useState([]);
  const { log, setLog } = useContext(Usercontext);
  const history = useHistory();
  const [data, setData] = useState([]);
  //  const [total, setTotal] = useState([]);
  const weburl = `https://bloggerbs.herokuapp.com/api/blog/`;



  const searchdata = (e) => {
    e.preventDefault()
    const modidata = data.filter((each) => {
      if (each.title.includes(search))
        return each
    });
    console.log(modidata);
    console.log(log);
    setSearcheddata(modidata);

  }

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
    else if (list.length <= 0)
      return <Noitem />;
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

  const displaytotalData = (list) => {
    if (list === undefined)
      return null;
    else if (list.length <= 0)
      return <Noitem />;
    return (
      list.map((item) => (
        <div key={item.id} className="item" >
          <h2>{item.title}</h2>
          <label className="lbl">Author Name:{item.author}</label>
          <label className="lbl">Date and Time of Publish:{item.date}</label>
          <h5>{item.text}</h5>
        </div >
      ))
    );
  }


  const fetchdata = async () => {
    if (log.id === '') {
      try {
        const result = await axios.get(weburl);
        const data = await result.data;
        setData(data);
      }
      catch (e) {
        console.log(e);
      }
    }
    else {
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
  }

  useEffect(() => {
    fetchdata();
  }, [])


  if (log.id === '') {
    return (<>
      <Navbar />
      <div className="container">
        <form onSubmit={searchdata}>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" name="search" onChange={(e) => { setSearch(e.target.value) }} />
            <div class="input-group-btn">
              <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
        </form>
        <div className="content">
          {
            displaytotalData(searcheddata)
          }
        </div>
      </div>

    </>
    );
  }
  else {
    return (
      <>
        <Admnav />
        <div className="container">
          <form onSubmit={searchdata}>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" name="search" onChange={(e) => { setSearch(e.target.value) }} />
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
              </div>
            </div>
          </form>
          <div className="content">
            {
              displayData(searcheddata)
            }
          </div>
        </div>

      </>
    );
  }
}
export default Category;
