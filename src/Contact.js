import React, { Component } from "react";
import "./Contact.css";
import githubLogo from "./images/github-logo.ico"
import linkedinLogo from "./images/linkedin-logo.png"
import gmailLogo from "./images/gmail-logo.ico"

class Contact extends Component {
  render() {
    return (
      <main class="contact">
        <div class="contact-items">
          <p>
            I'd love to grab coffee and talk about project prospects with you!
          </p>
          <form action="#" method="post">
            <fieldset>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Name"
                autofocus="True"
              />
              <input
                type="email"
                id="email"
                name="user_mail"
                placeholder="Email"
              />
              <textarea
                type="text"
                id="msg"
                name="user_msg"
                placeholder="Message"
              />
              <button type="submit">Send</button>
            </fieldset>
          </form>

          <figure>
            <a href="https://github.com/dsnair" title="GitHub">
              <img
                src={githubLogo}
                alt="https://github.com/dsnair"
              />
            </a>
            <a href="https://www.linkedin.com/in/dsnair/" title="LinkedIn">
              <img
                src={linkedinLogo}
                alt="https://www.linkedin.com/in/dsnair/"
              />
            </a>
            <a href="mailto:nowhere@gmail.com">
              <img
                src={gmailLogo}
                alt="nowhere@gmail.com"
                title="Email"
              />
            </a>
          </figure>
        </div>
      </main>
    );
  }
}

export default Contact;
