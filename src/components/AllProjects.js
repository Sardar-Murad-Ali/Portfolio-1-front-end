import React from 'react'
import "./AllProjects.css"
import "./Project.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {array} from "../utils"

const AllProjects = () => {
  function  card(url){
    window.open(
      url,
      '_blank'
    );
  }

  function  git(url){
    window.open(
      url,
      '_blank'
    );
  }
  
  return (

    <div className='AllMain'>
      <Typography variant='h3' style={{marginLeft:"30%",marginBottom:"50px",color:"#797409",cursor:"pointer"}} className=" gradient-text" >PortFolio Projects</Typography>
     <div className='ProjectsGrid'>
     {array?.map((all,i)=>{
         return(
             <Card key={i} style={{cursor:"pointer"}} sx={{ maxWidth: 345 }}>
             <CardMedia
           component="img"
           height="140"
           image={all?.image}
           alt={all?.smallText}
           />
           <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {all?.smallText}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             {all?.longPara}
           </Typography>
         </CardContent>
         <CardActions>
           <Button variant='outlined' size="small"  onClick={()=>card(all?.src) }>Open Live Site</Button>
           <Button variant='outlined' onClick={()=>git(all?.githupSrc) } size="small">See GitHup Repo</Button>
         </CardActions>
       </Card>
       )
     })}
   </div>
   </div>
  )
}

export default AllProjects
