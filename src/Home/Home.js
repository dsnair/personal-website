import React from 'react'

import './Home.css'
import SocialMedia from '../SocialMedia/SocialMedia'
import Closeup from './Closeup.jpg'

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
  </section>
)

export default Home
