import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import Logo from "./images/portfolio.png"
import Man from "./images/Man.jpg"
import "./Navbar.css"
import "./Intro.css"
//  @import url('https://fonts.googleapis.com/css2?family=Alkalami&family=Cedarville+Cursive&family=Cormorant+Garamond:wght@300&family=Handlee&family=Open+Sans:wght@300&display=swap'); 

// const pages = ['Home', 'Projects', 'Discord'];
const pages=[{
    text:"Home",
    path:"/"
},{
    text:"Projects",
    path:"/projects"
},
{
    text:"Communicate",
    path:"/discord"
},
{
    text:"Register/Login",
    path:"/register"
}
]


const ResponsiveAppBar = ({color,text,shadow}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
   
  return (
    <AppBar position="static" style={{background:color,position:"sticky",top:"0",left:"0",zIndex:"100",boxShadow:"0px 3px 10px",color:text}} className='Navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <img src={Logo} style={{width:"150px",height:"50px"}} className="Logo"/> */}


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                horizontal: 'left',
            }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                  display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Link to={page.path}>
                       <Typography style={{fontFamily:"'Handlee', cursive",color:text}} textAlign="center" className={({ isActive }) => (isActive ? 'activeLinks Links' : 'inactive Links')}>{page.text}</Typography>
                    </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,i) => (
            <Link key={i} to={page.path}>
              <Button
                key={page.text}
                className="Links"
                style={{fontFamily:"'Handlee', cursive",color:text}}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                {page.text}
              </Button>
            </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={Man} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
