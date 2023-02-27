import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="bg-secondary" id="contact">
        <p className="footer-title">Connect With US:</p>
        <ul>
          <div className="row">
            <div className="col-sm">
              <a href="https://facebook.com"><i style={{"fontSize":"24px"}} className="fa fa-facebook"></i>Facebook</a>
            </div>
            <div className="col-sm">
              <a href="https://facebook.com"><i style={{"fontSize":"24px"}} className="fa fa-twitter"></i>Twitter</a>
            </div>
            <div className="col-sm">
              <a href="https://facebook.com"><i style={{"fontSize":"24px"}} className="fa fa-instagram"></i>Instagram</a>
            </div>
            <div className="col-sm">
              <a href="https://facebook.com"><i style={{"fontSize":"24px"}} className="fa fa-linkedin"></i>LinkedIn</a>
            </div>
            <div className="col-sm">
              <a href="https://facebook.com"><i style={{"fontSize":"24px"}} className="fa fa-whatsapp"></i>Whatsapp</a>
            </div>
          </div>
        </ul>
        <span className="copy-right">© 2015-2023 Qualcomm Technologies, Inc. and/or its affiliated
          companies. Snapdragon and Qualcomm branded products are products of
          Qualcomm Technologies, Inc.</span>
      </footer>
    );
  }
}

export default Footer;
