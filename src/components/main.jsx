import React, { Component } from "react";
import "./main.css";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="">
          <div className="image-center responsive">
            <span className="image-title">
              Connecting the World with <span className="five-g-text">5G</span>
              <br />
            </span>
            <span className="image-body">
              The new technology for faster and grater India.
            </span>
          </div>
        </div>

        <br />
        <Question title="Why 5G" color="#e4e4e4" />
        <hr className="hr" />
        <Question title="What are its advantages?" color="white" />
        <hr className="hr" />
        <Question title="About the Company" id="about" color="#e4e4e4" />
        <hr className="hr" />
        <Question title="Why only us?" color="white" />
        <hr className="hr" />
      </div>
    );
  }
}
const Question = (props) => {
  return (
    <div
      className="q-block"
      style={{ backgroundColor: props.color, width: "100%" }}
    >
      <div className="q-title" id={props?.id}>
        <p>{props.title}</p>
      </div>
      <div className="q-answer">
        <p>
          A: 5G is the 5th generation mobile network. It is a new global
          wireless standard after 1G, 2G, 3G, and 4G networks. 5G enables a new
          kind of network that is designed to connect virtually everyone and
          everything together including machines, objects, and devices. 5G
          wireless technology is meant to deliver higher multi-Gbps peak data
          speeds, ultra low latency, more reliability, massive network capacity,
          increased availability, and a more uniform user experience to more
          users. Higher performance and improved efficiency empower new user
          experiences and connects new industries.
        </p>
      </div>
    </div>
  );
};
export default Main;
