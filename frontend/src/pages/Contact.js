import React, { useState } from "react";
import "./styles/contact.scss";
import axios from "axios";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const fieldclear = () => {
    setmessage("");
    setname("");
    setemail("");
  };

  const handlesubmit = async (event) => {
    const inname = name;
    const inemail = email;
    const inmessage = message;
    fieldclear();
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/register", {
        name: inname,
        email: inemail,
        message: inmessage,
      });

      alert("message stored");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="contactdiv">
      <form className="contactform" onSubmit={handlesubmit}>
        <label htmlFor="name ">Name</label>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          className="label"
          placeholder="Name"
          required
          value={name}
        ></input>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          step={{ color: "white" }}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
          required
          value={email}
        ></input>

        <label htmlFor="textarea">Message</label>
        <textarea
          onChange={(e) => setmessage(e.target.value)}
          placeholder="message.."
          required
          value={message}
        ></textarea>
        <button type="submit" onclick={handlesubmit} className="submitbtn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
