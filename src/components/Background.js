import React, { Component } from "react";
import "./Background.css";

class Background extends Component {
  render() {
    return (
      <section id="bg">
        <article>
          <h1>Front-end Engineer</h1>
          <h2>2018+</h2>
          <p />
          <a href="https://www.linkedin.com/in/dsnair/">
            <i className="fab fa-linkedin" />
          </a>
        </article>
        <article>
          <h1>Search Engine Marketing Lead</h1>
          <h2>2018</h2>
          <p>
            Led paid search ad campaigns and analyzed incoming traffic for an
            environmental non-profit organization based in NYC (volunteer
            position).
          </p>
        </article>
        <article>
          <h1>Data Analyst</h1>
          <h2>2017</h2>
          <p>
            Worked at a start-up in SF bay area; partnered with data scientists
            to analyze data using statistical and machine learning methodologies
            in Python and Google Cloud Platform.
          </p>
        </article>
        <article>
          <h1>Statistician</h1>
          <h2>2013 - 2016</h2>
          <p>
            Pursued Ph.D in Statistics (didn't quite finish!) after M.S in
            Mathematics. Partnered with a company in Boston to build
            production-level statistical software. Taught undergraduate
            Mathematics & Statistics courses.
          </p>
        </article>
      </section>
    );
  }
}

export default Background;
