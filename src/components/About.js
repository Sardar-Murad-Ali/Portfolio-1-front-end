import React,{useEffect} from 'react'
import Web from "./images/About.jpg"
import Typography from '@mui/material/Typography';
import "./About.css"
import Bwp from "./images/Bwp.jpg"

const About = () => {
 

  return (
    <div
          className='AboutMain'>

       <div className='Image'>
           <img src={Web}/>
       </div>

       <div className='Content'>
          <Typography variant="h2">About Me</Typography>
            {/* <p className='ShortPara'>Number of Paragraphs:Please LIKE & SHARE to keep our generators available!ClickLike
            Finding the truth wouldn't be easy, that's for sure. Then there was the question </p> */}
            <p className='ShortPara'>My name is Sardar Ali Murad, I'm a student of Software Engineering and I am currently learning MERN STACK. I create projects using ReactJs and NodeJs with a bunch of external libraries</p>

            <p className='LongPara'  style={{fontFamily:"'Handlee', cursive",}}>I live in Pakistan in Punjab Bahawalpur. I m a student who is trying to learn Mern Stack development. I can create backend API UI/UX design and Full Stack responsive, scaleable, interactive websites. I use Material UI for most of the UI-related stuff. And use MongoDB as a database. Using NodeJs as the backend language and making the RestFul API, S.</p>

            <div className='City'>
               <img style={{height:"150px",borderRadius:"50%",width:"150px"}} src={Bwp}/>
               <div className='CityInfo'>
                 <Typography variant='h5' style={{font:"font-family: 'Cormorant Garamond', serif"}} className="Country">From Pakistan,Bahawalpur</Typography>
                 <Typography variant='h7' className='Uni'>Student Of Islamia University Bahawalpur</Typography>
               </div>
            </div>
       </div>


    </div>
  )
}

export default About
