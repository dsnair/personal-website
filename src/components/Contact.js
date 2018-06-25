import React, { Component } from "react";
import "./Contact.css";
import githubLogo from "./images/github-logo.ico";
import linkedinLogo from "./images/linkedin-logo.png";
import gmailLogo from "./images/gmail-logo.ico";

class Contact extends Component {
  render() {
    return (
      <main class="contact">
        <div class="contact-items">
          <p>
            I'd love to grab coffee and talk about project prospects with you!
          </p>
          <form class="contact-items-form" action="#" method="post">
            <div class="form-name">
              <label for="name">Name</label>
              <input type="text" id="name" autofocus="True" />
            </div>
            <div class="form-email">
              <label for="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div class="form-msg">
              <label for="msg">Message</label>
              <textarea type="text" id="msg" />
            </div>
            <div class="form-button">
              <button type="submit">Send</button>
            </div>
          </form>
          <figure>
            <a href="https://github.com/dsnair" title="GitHub">
              <img src={githubLogo} alt="https://github.com/dsnair" />
            </a>
            <a href="https://www.linkedin.com/in/dsnair/" title="LinkedIn">
              <img
                src={linkedinLogo}
                alt="https://www.linkedin.com/in/dsnair/"
              />
            </a>
            <a href="mailto:nowhere@gmail.com">
              <img src={gmailLogo} alt="nowhere@gmail.com" title="Email" />
            </a>
          </figure>
        </div>
      </main>
    );
  }
}

export default Contact;
