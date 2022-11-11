import React from 'react'
import "./Intro.css"
import Typography from '@mui/material/Typography';
import Man from "./images/Man.jpg"

const Intro = () => {
  return (
    <div className='IntroMain'>

      <div className='Sans Content'>
     
         
         <h1 class="rainbow-text" style={{margin:"0px",width:"100%",marginBottom:"30px"}}> Hello My Name is</h1>
  

         <header>
   <h1 class="gradient-text" style={{cursor:"pointer"}}>Sardar Ali Murad</h1>
</header>

         <Typography  style={{marginBottom:"30px",color:"#157909",fontSize:"24px",fontWeight:"bolder"}}  variant="h5" className="rainbow-text">Mern Stack Developer</Typography>
         <Typography  style={{marginBottom:"30px",flex:"1",color:"gray",letterSpacing:"4px"}} variant="h7"> 
         "A stack is simply the different technologies being used to accomplish that goal."

Although there are many different stacks out there to consider, some have become more common than others. One of these popular stacks is called the MEAN stack which consists of

    MongoDB - document database
    Express(.js) - Node.js web framework
    React(.js) - a client-side JavaScript framework
    Node(.js) - the premier JavaScript web server

         </Typography>
      </div>

      <div className='Image'>
           <img src={Man}/>
      </div>
    </div>
  )
}

export default Intro
