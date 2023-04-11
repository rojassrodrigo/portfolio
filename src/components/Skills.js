import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Timeline from "./Timeline";
const Skills = ({title, dark, id}) => {
    const clases = useStyles();
    return (
        <div className={`${clases.section} ${dark && clases.sectiondark}`}>
            <div className={clases.sectionCont} id={id}>
               <Typography variant="h3" >{title}</Typography>
                {/* <Typography variant="h5"> Estas son las tecnologias con las que trabajo </Typography> */}
            
                  <Card className={clases.card}>
             
          
                <Timeline/>
            
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
      sectionDark: {
        backgroundColor: theme.palette.background.default,
      },
      h3: {
        fontWeight: "bold",
        marginTop: theme.spacing(5),
      },
      h5: {
        fontStyle: "italic",
        marginBottom: theme.spacing(4),
      },
  

  }))

export default Skills;