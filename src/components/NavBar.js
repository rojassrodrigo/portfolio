import { AppBar, Avatar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, MenuItem, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import logo from "../images/logo1.png";
import { Link, animateScroll as scroll } from "react-scroll";
// import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"
import {ContactMail, Info, EmojiObjects, Build } from "@material-ui/icons"
import MenuOpenIcon from '@material-ui/icons/MenuOpen';




const NavBar = () => {
    const clases = useStyles();
    const [open, setOpen] = useState(false)

    const links = [
        {
            id: "about",
            text: "About Me",
            icon: <Info fontSize="large"/>
        },
        {
            id: "skills",
            text: "My coding jouerney",
            icon: <EmojiObjects fontSize="large" className={clases.skills}/>
        },
        {
            id: "work",
            text: "My work",
            icon: <Build fontSize="large"/>
        },
        {
            id: "contact",
            text: "Contact",
            icon: <ContactMail fontSize="large"/>
        }
    
    ]

    return (
        <>
        <AppBar position="sticky" className={clases.root}>
            <Toolbar className={clases.toolbar}>
                {/* <img src={logo} className={clases.logo} alt="logo"/> */}
                <List className={clases.menu}>
                    {
                        links.map(({id, text}, index) => (
                            <Link key={index} 
                                to={id} spy={true} 
                                activeClass="active" 
                                smooth={true} 
                                duration={500} 
                                offset={-70} >
                                {text}
                            </Link>
                        ))
                    }
                </List>
                <IconButton edge="end" className={clases.menubutton} onClick={()=> setOpen(!open)}>
                    <MenuOpenIcon fontSize="large"/>
                </IconButton>
                
            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={()=> setOpen(false)}>
                    <IconButton onClick={()=> setOpen(false)} className={clases.cancelicon}>
                       <CancelIcon fontSize="large" />
                    </IconButton>
                    <Divider/>
                    {
                        links.map(({id, text, icon}, index) => (
                            <Link key={index} 
                                to={id} 
                                className={clases.sidebar}
                                spy={true} 
                                activeClass="active" 
                                smooth={true} 
                                duration={500} 
                                offset={-70} >
                                <ListItem component="h5">
                                    
                                        <Avatar>
                                            {icon}
                                        </Avatar>
                                    
                                    {text}
                                </ListItem>   
                            </Link>
                        ))
                    }
        </Drawer>
        </>
    )
}



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10vh",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  logo: {
    height: "1.5rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  skills: {
    color: "#ffcc00",
    fontSize: "0.8rem",
    fontWeight: 500,
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    "& a": {
      color: "#333",
      fontSize: "0.9rem",
      fontWeight: 600,
      margin: theme.spacing(0, 3),
      textDecoration: "none",
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#ffcc00",
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cancelicon: {
    color: "#ffcc00",
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    fontSize: "1.5rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "#ffcc00",
      position: "absolute",
      top: theme.spacing(2),
      right: theme.spacing(2),
      fontSize: "1.5rem",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
    },
    "& h5": {
      margin: theme.spacing(6, 0, 0, 3),
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: "0.1rem",
      color: "#333",
      textTransform: "uppercase",
      borderBottom: "1px solid #ffcc00",
      paddingBottom: theme.spacing(1),
    },
    "& h5:hover": {
      cursor: "pointer",
      color: "#ffcc00",
      borderBottom: "1px solid #ffcc00",
    },
    "& p": {
      marginTop: theme.spacing(4),
      fontSize: "0.8rem",
      lineHeight: 1.6,
      color: "#666",
      fontWeight: 400,
    },
  },
}));


// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#fff",
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 999,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "10vh",
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//     padding: theme.spacing(2),
//     [theme.breakpoints.down("sm")]: {
//       padding: theme.spacing(1),
//     },
//   },
//   logo: {
//     height: "1.5rem",
//     objectFit: "contain",
//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   skills: {
//     color: "#ffcc00",
//     fontSize: "0.8rem",
//     fontWeight: 500,
//   },
//   menu: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//     "& a": {
//       color: "#333",
//       fontSize: "0.9rem",
//       fontWeight: 600,
//       margin: theme.spacing(0, 3),
//       textDecoration: "none",
//       textTransform: "uppercase",
//       letterSpacing: "0.1rem",
//       transition: "color 0.3s ease",
//       "&:hover": {
//         color: "#ffcc00",
//       },
//     },
//   },
//   cancelicon: {
//     color: "#ffcc00",
//     position: "absolute",
//     top: theme.spacing(2),
//     right: theme.spacing(2),
//     fontSize: "1.5rem",
//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   menubutton: {
//     display: "none",
//     [theme.breakpoints.down("sm")]: {
//       display: "block",
//       color: "#ffcc00",
//       position: "absolute",
//       top: theme.spacing(2),
//       right: theme.spacing(2),
//       fontSize: "1.5rem",
//       "&:hover": {
//         cursor: "pointer",
//       },
//     },
//   },
//   sidebar: {
//     width: "40vw",
//     [theme.breakpoints.down("sm")]: {
//       width: "60vw",
//     },
//     "& h5": {
//       margin: theme.spacing(6, 0, 0, 3),
//       fontSize: "1rem",
//       fontWeight: 600,
//       letterSpacing: "0.1rem",
//       color: "#333",
//       textTransform: "uppercase",
//       borderBottom: "1px solid #ffcc00",
//       paddingBottom: theme.spacing(1),
//     },
//     "& h5:hover": {
//       cursor: "pointer",
//       color: "#ffcc00",
//       borderBottom: "1px solid #ffcc00",
//     },
//     "& p": {
//       marginTop: theme.spacing(4),
//       fontSize: "0.8rem",
//       lineHeight: 1.6,
//       color: "#666",
//       fontWeight: 400,
//     },
//   },
// }));


// const useStyles = makeStyles((theme) => ({
//   root:{
//     backgroundColor: "#fff",
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 999
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   logo: {
//     height: "1.5rem",
//     objectFit: "contain",
//     "&:hover": {
//       cursor: "pointer"
//     }
//   },
//   skills: {
//     color: "#ffcc00",
//     fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
//     fontWeight: 600,
//     fontSize: "0.9rem",
//   },
//   menu: {
//     [theme.breakpoints.down("sm")]:{
//       display: "none"
//     },
//     "& a":{
//       color:"#333",
//       fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
//       fontWeight: 600,
//       fontSize: "0.9rem",
//       marginLeft: theme.spacing(3)
//     },
//     "& a:hover":{
//       cursor: "pointer",
//       color: "tomato",
//       borderBottom: "3px solid tomato",
//     }, 
//   },
//   cancelicon:{
//     color: "tomato",
//     position: "absolute",
//     top: 0,
//     right: 10
//   },
//   menubutton: {
//     display: "none",
//     [theme.breakpoints.down("sm")]:{
//       display: "block",
//       color: "tomato",
//       position: "absolute",
//       top: 0,
//       right: 10,
//     }
//   },
//   sidebar: {
//     width:"40vw",
//     [theme.breakpoints.down("sm")]:{
//       width: "60vw",
//     },
//     "& h5":{
//       margin: theme.spacing(8, 0, 0, 3),
//       fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
//       fontWeight: 600,
//       fontSize: "1rem",
//       color:"#333",
//     },
//     "& h5:hover": {
//       color: "tomato",
//       cursor: "pointer"
//     } 
//   }
// }));


// const useStyles = makeStyles((theme) => ({
//     root:{
//         backgroundColor: "#fff",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 999
//     },
//     toolbar: {
//         display: "flex",
//         justifyContent: "flex-start",
//         alignItems: "center"
//     },
//     logo: {
//         height: "1.5rem",
//         objectFit: "contain",
//         "&:hover": {
//             cursor: "pointer"
//         }
//     },
//     skills: {
//         color: "#ffcc00"
//     },
//     menu: {
//         [theme.breakpoints.down("sm")]:{
//             display: "none"
//         },
//         "& a":{
//             color:"#333",
//             fontSize: "1.4rem",
//             fontWeigth: "bold",
//             marginLeft: theme.spacing(3)
//         },
//         "& a:hover":{
//             cursor: "pointer",
//             color: "tomato",
//             borderBottom: "3px solid tomato",
            
//         },
     
//     },
//     cancelicon:{
//         color: "tomato",
//         position: "absolute",
//         top: 0,
//         right: 10
        
//     },
//     menubutton: {
//         display: "none",
//         [theme.breakpoints.down("sm")]:{
//             display: "block",
//             color: "tomato",
//             position: "absolute",
//             top: 0,
//             right: 10,
//         }
//     },
//     sidebar: {
//         width:"40vw",
//         [theme.breakpoints.down("sm")]:{
//             width: "60vw",

//         },
//         "& h5":{
//             margin: theme.spacing(8, 0, 0, 3),
//             fontSize: "1.3rem",
//             color:"#333",
//             fontWeigth:"bold"
//         },
//         "& h5:hover": {
//             color: "tomato",
//             cursor: "pointer"
//         }
     
//     }
//   }))

export default NavBar;