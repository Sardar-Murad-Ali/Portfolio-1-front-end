import React from 'react'
import "./Project.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import {array} from "../utils"
const Project = () => {
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
    function  card(url){
        window.open(
          url,
          '_blank'
        );
      }
      
  return (
    <div className='ProjectMain'>

        <div className='ProjectDescription' >
          <Typography variant='h4'>My Portfolio Projects</Typography>
          <Link to="/projects">
             <Typography variant='h4' style={{color:"white"}}>See More</Typography>
          </Link>
        </div>

        <div className='ProjectsGrid'>
            {array?.slice(0,6).map((all,i)=>{
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
                  <Button variant='outlined' size="small" onClick={()=>git(all?.githupSrc) }>See GitHup Repo</Button>
                </CardActions>
              </Card>
              )
            })}
        </div>
             
        
    </div>
  )
}

export default Project
