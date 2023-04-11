import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Data from "../Data.js"

const MyWork = ({title, id, dark}) => {
    const clases = useStyles();
    return (
        <div className={`${clases.section} ${dark && clases.sectiondark}`}>
           
            <div className={clases.sectionCont} id={id}>
            <Typography variant="h3">{title}</Typography>
                <Grid container className={clases.grid}>
                    {
                        Data.map(({title, image, link}, index)=>(
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={clases.card}>
                                    <CardMedia image={image} className={clases.caratula} titulo="caratula"/>
                                    <CardContent className={clases.link}>
                                        <Link href={link} color="primary" target="_blank" rel="noopener-noreferrer">
                                            {title}
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}

// const useStyles = makeStyles((theme) => ({
//     section: {
//         minHeight: "100vh"
//     },
//     sectiondark: {
//         background: "#333",
//         color: "#fff"
//     },
//     sectionCont:{
//         maxWidth: "90vw",
//         margin: "0 auto",
//         padding: theme.spacing(5)
//     },
//     grid: {
//         marginTop: theme.spacing(10),
//     },
//     card: {
//         maxWidth:345,
//         minHeight: 275,
//         margin: theme.spacing(3)
//     },
//     caratula: {
//         height: 0,
//         paddingTop: '56.25%',
//     }
//   }))

// const useStyles = makeStyles((theme) => ({
//     section: {
//       minHeight: "100vh",
//       background: "#fff",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: theme.spacing(5),
//       textAlign: "center",
//     },
//     sectiondark: {
//       background: "#333",
//       color: "#fff"
//     },
//     sectionCont:{
//       maxWidth: "90vw",
//       margin: "0 auto",
//     },
//     grid: {
//       marginTop: theme.spacing(10),
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     card: {
//       maxWidth: 345,
//       minHeight: 275,
//       margin: theme.spacing(3),
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       transition: "transform 0.2s ease-in-out",
//       "&:hover": {
//         transform: "scale(1.05)",
//       },
//     },
//     caratula: {
//       height: 0,
//       paddingTop: '56.25%',
//     },
//     link: {
//       textDecoration: "none",
//       color: "#333",
//       fontWeight: "bold",
//       fontSize: "1.2rem",
//       transition: "color 0.2s ease-in-out",
//       "&:hover": {
//         color: "#777",
//       },
//     },
//     title: {
//       marginTop: theme.spacing(2),
//       marginBottom: theme.spacing(2),
//       fontSize: "2.5rem",
//       fontWeight: "bold",
//       textTransform: "uppercase",
//     },
//   }))

const useStyles = makeStyles((theme) => ({
    section: {
      margin: "0 auto",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(5),
      textAlign: "center",
      padding: "60px 0",
    },
    sectiondark: {
      background: "#F2F2F2",
      color: "#fff"
    },
    sectionCont: {
        padding: "500px",
        width: "80%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: theme.spacing(5),
      },
    // sectionCont:{
    //   marginTop: theme.spacing(10),
    //   maxWidth: "90vw",
    //   margin: "0 auto",
    //   padding: "500px",
    //   width: "80%",
    //   maxWidth: "1200px",
    //   padding: "60px 0",
    //   background: "linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)",
    // },
    grid: {
      marginTop: theme.spacing(10),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)",
      borderRadius: "1.5rem"
    },
    card: {
      maxWidth: 345,
      minHeight: 275,
      margin: theme.spacing(3),
      borderRadius: 10,
      overflow: "hidden",
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    caratula: {
      height: 0,
      paddingTop: '56.25%',
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontWeight: "bold",
      fontSize: "1.5rem",
      transition: "color 0.3s ease-in-out",
      "&:hover": {
        color: "#0077b6",
      },
    },
    title: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      fontSize: "3rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#0077b6",
      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    },
  }))
  
  

export default MyWork;