import React from "react";
import contact from '../assets/contact.jpg'
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="con">
      <div className="con-form">
        <Fade left>
          <div>
            <p className="con-h">Let's start a project together</p>
            <p className="con-t">
              We make all your dreams come true in a successful project.
            </p>
          </div>
        </Fade>
        <form className="form">
          <input className="con-inp" type="text" placeholder="Name" />
          <input className="con-inp" type="email" placeholder="Email" />
          <input className="con-inp" type="tell" placeholder="Phone" />
          <textarea
            style={{ height: "150px" }}
            className="con-inp"
            placeholder="Meassage"></textarea>
          <button className="con-btn">Submit</button>
        </form>
      </div>
      <div className="con-text">
        <img className="con-img" src={contact} />
      </div>
    </div>
  );
};

export default Contact;
