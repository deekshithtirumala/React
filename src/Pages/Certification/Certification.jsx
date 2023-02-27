import React from "react";
import "./Certification.css";
import python from '../../assets/python.jpg'
import cyberSecurity from '../../assets/cyberSecurity.jpg'
import js from '../../assets/js.jpg'
import nptel from '../../assets/nptel.jpg'
import django from '../../assets/django.jpg'
const Certification = () => {
  return (
    <div className="certi-div">
      <h1 className='certi-card1'>MY Certificates</h1>

      <div className="row">
        <CertificatesCard
          title1="Python For"
          title2="Data Science"
          company="Nptel"
          date="07/2022 - 02-2022"
          imge={nptel}
        />
        <CertificatesCard
          title1="Full Stack"
          title2="Web Development"
          company="Codinza"
          date="08/2022- 11/2022"
          imge="https://wallpapercave.com/wp/wp25995947.jpg"
        />
        <CertificatesCard
          title1="JavaScript For"
          title2="Begginers"
          company="Udemy"
          date="11/2022-11/2022"
          imge={js}
        />
        <CertificatesCard
          title1="Introduction To "
          title2="Django"
          company="Infosys SpringBoard"
          date="08/2022-08/2022"
          imge ={django}
        />
        <CertificatesCard
          title1="Program Essentails"
          title2="in Python"
          company="Cisco"
          date="07/2021-07/2021"
          imge={python}
        />
        <CertificatesCard
          title1="Introduction To "
          title2="CyberSecurity"
          company="Cisco"
          date="09/2022-09/2022"
          imge ={cyberSecurity}
        />
      </div>
    </div>
  );
};
const CertificatesCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="card certi-card ">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>
                {props.title1} <br /> {props.title2}
              </h1>
              <hr />
              <h3>By {props.company}</h3>
              <h3>{props.date}</h3>
            </div>
            <div className="flip-card-back">
              <img
                style={{ width: "350px", height: "200px" }}
                className="back-img"
                src={props.imge}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certification;
