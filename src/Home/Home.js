import React from 'react'
import { Link } from 'react-scroll'

import './Home.css'
import Closeup from './Closeup.jpg'
import SocialMedia from '../SocialMedia/SocialMedia'

const Home = () => (
  <section className="home">
    <img src={Closeup} alt="Divya Nair's headshot" />

    <h2>Hello! I'm</h2>
    <h1>Divya Nair</h1>
    <p>
      A Fullstack Engineer with Frontend industry experience and Data Science
      background.
    </p>

    <SocialMedia />

    <Link
      className="projects-link"
      to="projects"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      View Projects
    </Link>
  </section>
)

export default Home
