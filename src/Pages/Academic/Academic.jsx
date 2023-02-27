import React from "react";
import "./Academic.css";
const Academic = () => {
  return (
    <div className="academic-div">

      <div className="academic-head"><h1>Education</h1></div>
      <br />
      <div className="education row">
        <div className="btech col-md-4">
          <div className="card">
          <div className="degree">
            <h1>B-tech</h1>
          </div>
          <div className="data">
          <div className="branch">
            <h3>Electronics and <br /> Comnmunication</h3>
          </div>
          <div className="clg">
            <h5>Vishnu Institute of Technology</h5>
          </div>
          <div className="year">
            <h5>2020-Pursuing</h5>
          </div>
          <div className="gpa">
            <h5>9.4 <span>CGPA</span></h5>
          </div>
        </div>
          </div>
      </div>
        <div className="inter col-md-4">
          <div className="card">
          <div className="degree">
            <h1>Intermediate</h1>
        </div>
          <div className="data">
          <div className="branch">
            <h3>Mathmetice Physics <br /> Chemistry</h3>
          </div>
          <div className="clg">
            <h5>SVKP & PV Jr College</h5>
          </div>
          <div className="year">
            <h5>2018-2020</h5>
          </div>
          <div className="gpa">
            <h5>9.79 <span>CGPA</span></h5>
          </div>
        </div>
          </div>
        </div>
        <div className="ssc col-md-4">
          <div className="card">
          <div className="degree">
              <h1>SSC</h1>
          </div>
          <div className="data">
            <br />
            <div className="clg">
              <h5>ZPP High School Tholeru</h5>
            </div>
            <div className="year">
              <h5>2017-2018</h5>
            </div>
            <div className="gpa">
              <h5>9.7 <span>CGPA</span></h5>
            </div>
            <br/>
            <br />
          </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Academic;
