import React, { useContext } from 'react';
import Admnav from './Admnav';
import Navbar from './Navbar';
import { Usercontext } from './Usercontext';

const Category = () => {

  const { log, setLog } = useContext(Usercontext);
  if (log.id == '') {
    return (
      <>
        <Navbar />


      </>
    );
  }
  else {
    return (
      <>
        <Admnav />


      </>
    );
  }
}

export default Category;
