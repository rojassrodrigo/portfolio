import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import perfil from "../images/perfil1.jpg";
import TypeWriterEffect  from "react-typewriter-effect";
import cv from "../images/cv.jpg"

const About = ({title, dark, id}) => {
    const clases = useStyles();
    return (
        <div className={`${clases.section} ${dark && clases.sectiondark}`}>
            <div className={clases.sectionCont} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={clases.card}>
                    <CardMedia image={perfil} className={clases.media} title="picture"/>
                    <CardContent className={clases.cardcontent}>
                        <TypeWriterEffect
                            text="Hi, I am Rodrigo Rojas"
                            textStyle={{fontSize: "2rem", fontWeigth: "700px", color:"tomato"}}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={50}
                        />
                        <TypeWriterEffect
                            text="Soy full stack developerrrr y manejo muchos lenguajes porque soy inteligente "
                            textStyle={{fontSize: "1.2rem", fontWeigth: "500px", color:"black"}}
                            startDelay={2500}
                            cursorColor="black"
                            typeSpeed={25}
                        />
                        <Typography variant="h6" color="textSecondary">
                            Texto que describe lo bueno que somos los programadores y lo mucho que vamos a aportart
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={clases.cvbutton} variant="contained">
                            <a href={cv} download>
                                Download CV
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
        minHeight: "100vh"
    },
    sectiondark: {
        background: "#333",
        color: "#fff"
    },
    sectionCont:{
        maxWidth: "80vw",
        margin: "0 auto",

    },
    card:{
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
    },
    cvbutton:{
        position:"absolute",
        bottom: "5rem",
        right: "2rem",
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            rigth: "1rem"
        },
        backgroundColor: "tomato",
        padding: theme.spacing(3),
        "&:hover":{
            backgroundColor:"#fff",

        },
        "& a":{
            color: "#fff",
            textDecoration: "none",
            fontWeigth: 900,

        },
        "& a:hover":{
            color: "tomato"
        }
    },
    media: {
        width: "280px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "5px",
        margin: theme.spacing(5)
    },
    cardcontent:{
        marginTop: theme.spacing(3),
        "& h6": {
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")]: {
               display: "none"
            }
        }
    }
  }))

export default About;