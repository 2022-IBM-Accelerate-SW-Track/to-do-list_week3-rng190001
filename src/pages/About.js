import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Riya Gandhi</div>
            <div className="brief_description">
                  Fun Facts: I am from Arkansas, I love designing things :), and lastly I have travelled outside the country 4 times!
                  <br></br>
                  <br></br>
                  Hobbies: Listening to music, painting, and coding 
                  <br></br>
                  <br></br>
                  Interests: Front-End Development, Cyber-Security, and ML/AI
            </div>
          </div>
        </div>
      </div>
    );
  }
}
