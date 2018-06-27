import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <p>Looking for a project partner? I'd love to connect with you!</p>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea type="text" name="msg" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
}

export default Contact;
