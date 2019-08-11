import React from 'react'
import './Projects.css'

const Projects = () => (
  <section className="projects" id="projects">
    <h1>Projects</h1>

    <section className="project-cards">
      <section>
        <p className="jobtitle">Fullstack</p>
        <p className="techstack">
          React · Redux · React Router · Express · Heroku · Postgres · Auth0 ·
          MaterialUI
        </p>
        <p className="name">Training Bot</p>
        <p className="description">
          Training Bot is SaaS for employee trainings. This built-on project
          integrates with multiple APIs for training communications.
        </p>
        <ul>
          <li>Wrote routed, React components and managed state with Redux</li>
          <li>Wrote backend database queries to send in response</li>
          <li>
            Authenticated users via Magic Links, LinkedIn, Facebook, Google with
            Auth0
          </li>
          <li>Responsively styled the components</li>
          <li>User tested the product</li>
        </ul>
        <a href="https://github.com/labs13-trainingbot-3-0">View Project</a>
      </section>

      <section>
        <p className="jobtitle">Backend</p>
        <p className="techstack">
          Express · Heroku · Postgres · Jest · JSON Web Token · UnSplash API ·
          Faker
        </p>
        <p className="name">Fotograph</p>
        <p className="description">
          Fotograph is a portfolio site for professional photographers.
        </p>
        <ul>
          <li>Set-up, seeded and migrated data to database</li>
          <li>Authenticated users and persisted user session</li>
          <li>Wrote routed endpoints and queried database to send response</li>
          <li>Unit tested endpoints</li>
        </ul>
        <a href="https://github.com/art-portfolio-bw/art-portfolio-BE-divya">
          View Project
        </a>
      </section>

      <section>
        <p className="jobtitle">Backend</p>
        <p className="techstack">Python · Django · Heroku · Postgres</p>
        <p className="name">Multi-user Dungeon Game</p>
        <p className="description">
          This built-on project is a text-based game where players go on
          adventures collecting treasures.
        </p>
        <ul>
          <li>Wrote routed endpoints to support game logic</li>
          <li>User tested the game</li>
        </ul>
        <a href="https://github.com/lambda-mud/backend">View Project</a>
      </section>

      <section>
        <p className="jobtitle">Frontend</p>
        <p className="techstack">
          React · React Router · Styled Components · UnSplash API
        </p>
        <p className="name">Wanderlust</p>
        <p className="description">
          Wanderlust helps local tour guides advertise their professional trips
          and the experiences they offer.
        </p>
        <ul>
          <li>Built routed, React components</li>
          <li>
            Authenticated and rendered backend user data with HTTP requests
          </li>
          <li>Generated photos for frontend data with UnSplash API</li>
          <li>Made UI/UX decisions and responsively styled the components</li>
        </ul>
        <a href="https://github.com/wanderlust-team/Front-end">View Project</a>
      </section>

      <section>
        <p className="jobtitle">Frontend</p>
        <p className="techstack">JavaScript · HTML5 · LESS · InVision</p>
        <p className="name">Droom</p>
        <p className="description">
          Droom helps employers and employees can find each other by swiping
          right.
        </p>
        <ul>
          <li>Built landing page with JavaScript and HTML5</li>
          <li>Responsively styled with LESS</li>
          <li>Made UI/UX decisions and wireframes in InVision</li>
          <li>Wrote page content</li>
        </ul>
        <a href="https://github.com/lambda-build-week-droom/UI-Landing-Page-Divya">
          View Project
        </a>
      </section>
    </section>
  </section>
)

export default Projects
