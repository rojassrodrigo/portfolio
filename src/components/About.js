import { Button, Card, CardActions, CardContent, CardMedia, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import perfil from "../images/perfil1.jpg";
import cv from "../images/cv.jpg"

const About = ({title, dark, id}) => {
    const clases = useStyles();
    return (
        <div className={`${clases.section} ${dark && clases.sectiondark}`}>
            <div className={clases.sectionCont} id={id}>
                <Typography variant="h3">{title}</Typography>

                <Card className={clases.card}>
                    <CardMedia 
                        image={perfil} 
                        className={clases.media} 
                        title="Mi foto de perfil"
                    />
                    <CardContent className={clases.cardcontent}>
                        <Typography variant="h4" color="textPrimary">
                        Hola, soy Rodrigo Rojas
                        </Typography>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                        Full Stack Developer
                        </Typography>
                        <Divider variant="middle" />
                        <Typography variant="body1" color="textPrimary" paragraph>
                        Soy un desarrollador Full Stack altamente motivado y creativo con experiencia en varios lenguajes de programación y tecnologías. Estoy interesado en trabajar en proyectos desafiantes y en equipo para desarrollar soluciones de software efectivas.
                        </Typography>
                        <Typography variant="body1" color="textPrimary" paragraph>
                        ¡Contáctame y hablemos de cómo puedo ayudar en tu proyecto!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={clases.cvbutton} variant="contained" color="primary">
                        <a href={cv} download>
                            Descargar CV
                        </a>
                        </Button>
                    </CardActions>
                    </Card>


            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  sectionCont: {
    width: "80%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "40px",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "800px",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
  },
  media: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "normal",
    color: "#666",
    marginBottom: "40px",
    fontFamily: "'Poppins', sans-serif",
  },
  content: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#666",
    lineHeight: "1.5",
    marginBottom: "40px",
    fontFamily: "'Open Sans', sans-serif",
  },
  cvbutton: {
    display: "flexbox",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)",
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.2rem",
    background: "linear-gradient(to bottom, #1a1a1a, #000000)",
    borderRadius: "0.5rem",
    transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    "&:active": {
      transform: "scale(0.95)",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  },
    "&:hover": {
        transform: "translateY(-2px) rotate(5deg)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
        background: "linear-gradient(to bottom, #2c2c2c, #1a1a1a)",
    },
    "& a": {
        color: "#fff",
        textDecoration: "none",
        fontWeight: 900,
        backgroundColor: "transparent",
        borderRadius: "0.5rem",
    },
    "& a:focus": {
      outline: "none",
      transform: "scale(1.05)",
      fontSize: "1.3rem",
  },
    "& a:hover": {
        color: "#fff",
        borderRadius: "0.5rem",
    },
}

}));


// const useStyles = makeStyles((theme) => ({
//   section: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F2F2F2",
//   },
//   sectionCont: {
//     width: "80%",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "60px 0",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//   },
//   title: {
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: "40px",
//     fontFamily: "'Poppins', sans-serif",
//   },
//   card: {
//     width: "100%",
//     maxWidth: "800px",
//     padding: "40px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//     borderRadius: "20px",
//   },
//   media: {
//     width: "200px",
//     height: "200px",
//     objectFit: "cover",
//     borderRadius: "50%",
//     marginBottom: "20px",
//   },
//   name: {
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: "10px",
//     fontFamily: "'Poppins', sans-serif",
//   },
//   subtitle: {
//     fontSize: "18px",
//     fontWeight: "normal",
//     color: "#666",
//     marginBottom: "40px",
//     fontFamily: "'Poppins', sans-serif",
//   },
//   content: {
//     fontSize: "16px",
//     fontWeight: "normal",
//     color: "#666",
//     lineHeight: "1.5",
//     marginBottom: "40px",
//     fontFamily: "'Open Sans', sans-serif",
//   },
//   button: {
//     backgroundColor: "#333",
//     color: "#fff",
//     borderRadius: "30px",
//     padding: "12px 32px",
//     textDecoration: "none",
//     fontSize: "16px",
//     fontWeight: "bold",
//     fontFamily: "'Poppins', sans-serif",
//     transition: "all 0.2s ease-in-out",
//     boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//     "&:hover": {
//       backgroundColor: "#fff",
//       color: "#333",
//       border: "2px solid #333",
//       boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
//     },
//   },
  
// }));


  
// const useStyles = makeStyles((theme) => ({
//     section: {
//         minHeight: "100vh"
//     },
//     sectiondark: {
//         background: "#333",
//         color: "#fff"
//     },
//     sectionCont:{
//         maxWidth: "80vw",
//         margin: "0 auto",

//     },
//     card:{
//         height: "70vh",
//         display: "flex",
//         marginTop: theme.spacing(6),
//         position: "relative",
//     },
//     cvbutton:{
//         position:"absolute",
//         bottom: "5rem",
//         right: "2rem",
//         [theme.breakpoints.down("sm")]: {
//             bottom: "2rem",
//             rigth: "1rem"
//         },
//         backgroundColor: "tomato",
//         padding: theme.spacing(3),
//         "&:hover":{
//             backgroundColor:"#fff",

//         },
//         "& a":{
//             color: "#fff",
//             textDecoration: "none",
//             fontWeigth: 900,

//         },
//         "& a:hover":{
//             color: "tomato"
//         }
//     },
//     media: {
//         width: "280px",
//         height: "auto",
//         objectFit: "cover",
//         borderRadius: "5px",
//         margin: theme.spacing(5)
//     },
//     cardcontent:{
//         marginTop: theme.spacing(3),
//         "& h6": {
//             marginTop: theme.spacing(6),
//             [theme.breakpoints.down("sm")]: {
//                display: "none"
//             }
//         }
//     }
//   }))

export default About;