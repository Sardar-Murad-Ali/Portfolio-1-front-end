import React from 'react'
import {Intro,About,Contact,Project,Navbar} from "../components/index"
import "../App.css"
import {FadeInWhenVisible} from "../utils"

const Home = () => {
  return (
    <div className='Main'>
      <FadeInWhenVisible>
      <Navbar color="black"/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
      <Intro/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
       <About/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
       <Contact/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
       <Project/>
      </FadeInWhenVisible>
    </div>
  )
}

export default Home
