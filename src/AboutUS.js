import React, { useContext } from 'react';
import Admnav from './Admnav';
import Navbar from './Navbar';
import { Usercontext } from './Usercontext';

const AboutUs = () => {
  const { log, setLog } = useContext(Usercontext);
  if (log.id == '') {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="content">
            <center>
              <h2>
                ABOUT US
</h2>
              <h4>
                Develped By:- B S Prashant
</h4>
              <h5>Mail me on :- ps521520@gmail.com </h5>
              <h5>Mobile no :- 9534269233 </h5>

            </center>
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
          <div className="content">
            <center>
              <h2>
                ABOUT US
</h2>
              <h4>
                Develped By:- B S Prashant
</h4>
              <h5>Mail me on :- ps521520@gmail.com </h5>
              <h5>Mobile no :- 9534269233 </h5>

            </center>
          </div>
        </div>

      </>
    );
  }
}

export default AboutUs;
