import { memo } from "react"
import  bank from "./components/images/bank.jpg"
import  blog from "./components/images/blog.jpg"
import  coin from "./components/images/coin.jpg"
import  Ecomerence from "./components/images/Ecommerence.jpg"
import  gpt from "./components/images/gpt.jpg"
import  gym from "./components/images/gym.jpg"
import  memeories from "./components/images/memories.jpg"
import  music from "./components/images/music.jpg"
import  socialMedia from "./components/images/SocialMedia.jpg"
import  youtube from "./components/images/youtube.webp"
import { motion } from "framer-motion";
import You from "./components/images/You.png"

let array=[
    {
        image:music,
        src:"https://ornate-stardust-068f15.netlify.app",
        smallText:"Shezam App",
        githupSrc:"https://github.com/Sardar-Murad-Ali/SHAZAM-APP-FINAL.git",
        longPara:"The Music APP is single page application and using Shazam Api from the Rapid Api.It contains four pages one for the most popular stuff and single chart page and one  for the author and one is for the lyrics and the related charts"
    },
    {
        image:You,
        src:"https://youtube-front-layout-murad.herokuapp.com/",
        smallText:"Youtube Front End Layout",
        githupSrc:"https://github.com/Sardar-Murad-Ali/Youtube-Front-End-Layout",
        longPara:"This is app in which i tried to create the make the front end layout of the youtube app. It contains th e Home page, Single Vedio page, History page, Login page, Channel page and the Library page"
    },
    {
        image:youtube,
        src:"https://spectacular-puffpuff-cc095b.netlify.app",
        smallText:"Youtube App",
        githupSrc:"https://github.com/Sardar-Murad-Ali/YOUTUBE-APP-FINAL-REAL.git",
        longPara:"The Youtube APP is making use of Youtube-V3 from the Rapid Api.It contains three pages one for the most popular stuff and one is for single vedio with the releated vedios and there is one for the single channel"
    },
    {
        image:coin,
        src:"https://jolly-syrniki-5a1925.netlify.app",
        smallText:"CryptoCurrency App",
        githupSrc:"https://github.com/Sardar-Murad-Ali/BitCoin-App-Final.git",
        longPara:"CryptoCurrency App is yet another app having made up of the CoinRanking API agin from the Rapid Api and having  three pages one for the news and the all coins data and one is for the single coin details and there is a page which  goes in the depth of the all coins and the releated coin news and also using the google search Api"
    },
    {
        image:gym,
        src:"https://statuesque-kringle-4359b0.netlify.app",
        smallText:"Gym App",
        githupSrc:"https://github.com/Sardar-Murad-Ali/GYM-APP-FINAL-REAL.git",
        longPara:"The GYM APP is single page application and using the Rapid Api most precisely Exercise DB and an Api for the youtube vedios This one is responsive website so go through and see the website"
    },
    {
        image:gpt,
        src:"https://roaring-nougat-81fa53.netlify.app",
        smallText:"Gpt App",
        githupSrc:"https://github.com/Sardar-Murad-Ali/GPT-FINAL-.git",
        longPara:"The Gpt App is the app made up of react using the react functional based componenets and is a good example of the UI/UX design and this is a responsive website Note this is simply a static page."
    },
    // {
    //     image:memeories,
    //     src:"https://memeries-real-sardar.herokuapp.com/",
    //     smallText:"Memory App",
    //     githupSrc:"https://github.com/Sardar-Murad-Ali/Memories-App-Final.git",
    //     longPara:"Memories App is using the Mern Stack typicall CRUD operations and you have to login first and make memories of your own and then revisit again and to see your memories again so go on and make some memories"
    // },
    // {
    //     image:bank,
    //     src:"https://effervescent-boba-b38b0d.netlify.app",
    //     smallText:"Bank App",
    //     githupSrc:"https://github.com/Sardar-Murad-Ali/BANK-APP-FINAL-REAL.git",
    //     longPara:"The Bank App is the app made up of react using the react functional based componenets and is a good example of the UI/UX design and this is a responsive website Note this is simply a static page."
    // },
    {
        image: Ecomerence,
        src:"https://ecommernce-real-app-saradr.herokuapp.com/",
        smallText:"Ecommerce App",
        githupSrc:"https://github.com/Sardar-Murad-Ali/FULL-STACK-ECOMMERENCE-APP.git",
        longPara:"Ecommerence App is using mostly the Mern Stack Stuff and there is an admin to make the products and he also can make changings in the reviews and the products and you can comment and make changings to you comments and indeed make an order so this app is also using the stripeJs"
    },
    {
        image: blog,
        src:"https://sardar-portfolio-web.herokuapp.com/",
        smallText:"Blog App",
        githupSrc:"https://github.com/Sardar-Murad-Ali/PrivateBlogLast.git",
        longPara:"The Blog App is simple Mern Stack based Blog Application where you can make friends and thus can communicate with them so we are using the web sockets most pecisely the socket.io for the communication purpose so go on and make some blogs of your own"
    },
    {
        image: socialMedia,
        src:"https://social-media-app-real-sardar.herokuapp.com/",
        smallText:"Social Media App",
        githupSrc:"https://github.com/Sardar-Murad-Ali/SocialMedia.git",
        longPara:"Social Media is yet another simple MERN App  where you can post a picture and you are having your own dashboard and you can delete download and open the post in the web browsers Note: Some  of these apps are made by watching the interface of the websites from online sources"
    },
]

function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1,  },
          hidden: { opacity: 0,  }
        }}
      >
        {children}
      </motion.div>
    );
  }


export {array,FadeInWhenVisible}