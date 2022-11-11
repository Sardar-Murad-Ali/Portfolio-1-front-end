import React from 'react'
import {Navbar} from "../components/index"
import { useAppContext } from '../context/appContext'
import "./Discord.css"
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button, Typography, typographyClasses } from '@mui/material';
import FormRow from '../components/FormRow';
import axios from "axios"
import Alert from "../components/Alert"
// Material Ui
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

// Material Ui Ends




const Discord = ({socket}) => {
  let {user,token,createMessage,showAlert}=useAppContext()
  let [users,setUsers]=React.useState([])
  let [message,setMessage]=React.useState("")
  let [messages,setMessages]=React.useState([])
  let LastMessageRef=React.useRef()

  function handleChange(e){
     setMessage(e.target.value)
  }

  React.useEffect(()=>{
    socket.emit("AddUser",user)
  },[])

  React.useEffect(()=>{
     socket.on("GetUsers",(users)=>{
      //  console.log(users)
      setUsers(users)
     })
  },[])

  React.useEffect(()=>{
    socket.on("GetMessage",(data)=>{
      setMessages((pre)=>[...pre,data])
    })
  },[socket])

  React.useEffect(()=>{
    let start=async ()=>{
      try {
        let {data}=await axios.get("/api/v1/message",{headers:{Authorization:`Bearer ${token}`}})
        setMessages(data.Messages)
      } catch (error) {   
        console.log(error)
      }
    }

    start()
  },[])

  React.useEffect(()=>{
     LastMessageRef?.current?.scrollIntoView({behavior:"smooth"})
  },[messages])

  
  // console.log(messages)

  function SendMessage(){
    createMessage({message})
    if(message!=="" && user!=null){
       socket.emit("Message",{user,message})
    }

    setMessage("")
  }

  

  return (
    <div className='DiscordMain'>
      <Navbar color="white" shadow="0 25px 45px rgba(255,255,255,0.1)" text="black"/>

      <div className='DiscordBottomSection'>

        <div className='OnlineMain' >
          <Typography variant='h5' style={{color:"white"}} className="OnlineUsersHeading">OnlineUsers</Typography>

          <div className='OnlineUsers'>
            {
             users.map((all)=>{
               return   <StyledBadge
                overlap="circular"
               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              >
               <Avatar className='SingleOnline' alt="Remy Sharp" src={all?.image} />
              </StyledBadge> 
            })
           }
        </div>

        </div>

        <div className='ConversationMain'>
            <Typography varaint="h1" className='ConversationHeaders' style={{marginLeft:"30%",marginTop:"40px",fontSize:"25px",fontFamily:" 'Alkalami', serif",marginBottom:"40px"}}>Start The Conversation</Typography>
            <div className='ConversationMessages'>    
                    {
                      messages.map((message)=>{
                        return (
                          <div style={{marginBottom:"50px"}} className={message.user.name===user.name?"activeUserBox":"NotActiveUserBox"} >
                            <div  style={{display:"flex"}} ref={LastMessageRef}>
                              <img style={{marginRight:"30px",height:"40px",width:"40px",borderRadius:"50%"}} src={message?.user?.image}/>
                              <Typography  variant='h5'>{message?.user?.name}</Typography>
                            </div>

                            <div className={message.user.name===user.name?"activeUser":"NotActiveUser"}>
                              <Typography className='message' variant='h5' style={{padding:"20px",borderRadius:"10px"}}>{message?.message}</Typography>
                            </div>
                            
                          </div>
                        )

                      })
                    }        
            </div>


            <div className='ConversationFooter'>
              <div className='ConversationFooterForm'>
               {showAlert && <Alert/>}
              <textarea style={{fontSize:"25px"}} className='form-textarea' value={message} onChange={handleChange} placeholder="Message"></textarea>
              <Button variant='outlined' style={{marginTop:"40px"}} onClick={SendMessage}>Send</Button>
              </div>
            </div>
        </div>

      </div>


    
    </div>
  )
}

export default Discord
