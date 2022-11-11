import React from 'react'
import "./Contact.css"
import { Button, formGroupClasses, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import "./Form.css"
import FormRow from './FormRow';
import { send } from 'emailjs-com';
import Alert from "./AlertEmail"

const Contact = () => {
    let [state,setState]=React.useState({
        from_name:'',
        message:"",
        reply_to:""
      })

      let [loading,setLoading]=React.useState(false)
      let [alertType,setAlertType]=React.useState("")
      let [alertText,setAlertText]=React.useState("")

      function clearAlert(){
        setLoading(false)
        setAlertText("")
        setAlertType("")
      }

      function handleChange(e){
        setState((pre)=>{
         return{
           ...pre,
           [e.target.name]:e.target.value
         }
        })
     }

     function submit(){
        if(state.reply_to==="" || state.message===""  || state.from_name===""){
            console.log("error")
            setLoading(true)
            setAlertText("Please Provide All The Values")
            setAlertType("danger")
        }
        
        else{
            console.log("success")
            send(
            'service_nsfmnqe',
            'template_im00qqq',
            state,
           'w6l1TF_wUxoKEUts_'
           )
           .then((response) => {
             console.log('SUCCESS!', response.status, response.text);
           })
           .catch((err) => {
             console.log('FAILED...', err);
           });
           setLoading(true)
           setAlertText("We Recieved Your Email Successfully")
           setAlertType("success")
           setState({
              from_name:'',
              message:"",
              reply_to:""
            })
        }

        setTimeout(()=>{
            clearAlert()
        },3000)


         }


         
         return (
             <div className='ContactMain'>
       <div className='ContactInfo'>
          <Typography variant='h4'>Feel Free To Contact Me!</Typography>
          <div className='PhoneNumber'>
            <PhoneIcon className='icon' fontSize='large'/>
            <p className='Number'>+923245354867</p>
          </div>

          <div className='WhatsAppNumber'>
            <WhatsAppIcon className='icon' fontSize='large'/>
            <p className='WhatsApp'>+923186881689</p>
          </div>

       </div>

       <div className='ContactForm'>
          <h3 variant='h4' className='EmailContact' style={{marginBottom:"30px"}}>Contact Me Via Email</h3>
          {loading && <Alert alertType={alertType} alertText={alertText}/>}
          <FormRow type="text" value={state.from_name} name="from_name" labelText="Your Good Name" handleChange={handleChange}/>
          <FormRow type="text" value={state.reply_to} name="reply_to" labelText="Your Email" handleChange={handleChange}/>
          <textarea onChange={handleChange} placeholder="Provide You Message" name="message" value={state.message}  className="form-textarea form"></textarea>
          <Button className='EmailSubmit' variant='outlined' style={{marginRight:"100%"}} onClick={submit}>Submit</Button> 
       </div>
    </div>
  )
}

export default Contact
